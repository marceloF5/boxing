import React from 'react';
import './app.css';

const App = ({ count: initialCount = 10 }) => {
    const [count, setCount] = React.useState(initialCount);

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
