import { useDispatch } from "react-redux";
import { decrement, increment } from "../store/action";

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
        </div>
    )
}
export default Publisher;