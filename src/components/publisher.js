import { useDispatch } from "react-redux";
import { decrement, increment, multiply } from "../store/action";

const Publisher = () => {
    let dispatch = useDispatch();

    return (
        <div>
            <button id="btn" onClick={e=>{
                dispatch(increment())
            }}>Increment</button>
            <button id="btn" onClick={e=>{
                dispatch(decrement())
            }}>Decrement</button>
            <button id="btn" onClick={e=>{
                dispatch(multiply())
            }}>Multiply</button>
        </div>
    )
}
export default Publisher;