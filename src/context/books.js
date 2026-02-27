import { createContext, useState } from 'react';

const BooksContext = createContext();

function Provider({children}) {
    const [count, setCount] = useState(5);

    const valueToShare = {
        count,
        incrementCount: () => {
            setCount(count + 1);
        }
    }
    
    return <BooksContext.Provider value={valueToShare}>
        {children}
    </BooksContext.Provider>
}
// named export
export { Provider };

// default export
export default BooksContext;
