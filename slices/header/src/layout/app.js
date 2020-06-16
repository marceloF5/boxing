import React from 'react';
import './app.css';
import Button from '@boxing/button';
// eslint-disable-next-line import/no-unresolved

const App = ({ countInitial }) => {
    console.log('App -> countInitial', countInitial);

    const [count, setCount] = React.useState(countInitial);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </>
    );
};

export default App;
