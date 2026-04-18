function Counter ({count,onIncrement}) {
return(
    <>
    <p>{count}</p>
    <button onClick={onIncrement}>Increment</button>
    </>
)
};

export default Counter;