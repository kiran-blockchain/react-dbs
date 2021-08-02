import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div data-testid="counter">
            <input type="text"
                name="myown"
                data-testid="inputctrl"
                onChange={
                    e => {
                        // try {
                        if (parseInt(e.target.value)) {
                            setCount(parseInt(e.target.value));
                        }
                        else {
                            throw new Error('Input should be an integer');
                        }
                    }
                }
                value={count} />
            <label data-testid="count">{count}</label>
            <button data-testid="btnIncrement" onClick={e => {
                setCount(count + 1);
            }}>Increment</button>
        </div>
    )
};
export default Counter;