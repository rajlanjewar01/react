## Context API

Context provides a way to share data between components without prop drilling. The process involves three main steps:

1. **Create the context**
2. **Specify the data that will be shared**  
3. **Consume the data in a component**

---

#### Step 1: Create the Context

First, create a context object that will hold our shared data

```javascript
import { createContext } from 'react';
const BooksContext = createContext();
```

##### BooksContext Components:
- **Provider**: Component used to specify what data we want to share
- **Consumer**: Component used to get access to data

---

#### Step 2: Specify the Data to Share

Wrap your components with the Provider and pass data through the `value` prop.

```jsx
<BooksContext.Provider value={5}>
    <MyComponent />
</BooksContext.Provider>
```

#### Key Points:
- **`<BooksContext.Provider value={5}>`** - The `value` prop is special and defines what will be shared
- **`value={5}`** - The actual data being shared
- **`<MyComponent />`** - This component and its children can now access the shared value

---

#### Step 3: Consume the Data

Access the context data in components using the `useContext` hook.

```jsx
import { useContext } from 'react';
import BooksContext from './book';

function MyComponent() {
    const num = useContext(BooksContext);

    return <div>{num}</div>
}
```

#### Explanation:
- **`import { useContext } from 'react';`** - Function for accessing values in context
- **`import BooksContext from './book';`** - The context object we created
- **`const num = useContext(BooksContext);`** - 'num' contains the value stored in context (5)

---

### Implementation Steps

#### Step 1: Create Context File

Create a new folder called `/context` inside the `/src` directory and add a context file:

**`src/context/books.js`**
```javascript
import { createContext } from 'react';

const BooksContext = createContext();
export default BooksContext;
```

#### Step 2: Wrap App with Provider

Open the `index.js` file and wrap the App component with the provider:

**`src/index.js`**
```jsx
import BooksContext from './context/books';

root.render(
    <BooksContext.Provider value={5}>
        <App />
    </BooksContext.Provider>
);
```

### Step 3: Consume Data in Components

Use the context in any component that needs the shared data:

**`src/components/BookList.js`**
```jsx
import { useContext } from 'react';
import BooksContext from '../context/books';

function BookList() {
    const value = useContext(BooksContext);
    
    return (
        <div>
            Books context value: {value}
        </div>
    );
}

export default BookList;
```

---

### Summary

This Context API pattern eliminates prop drilling by:
1. Creating a centralized data store (Context)
2. Providing data at a high level in the component tree
3. Consuming data directly in components that need it
