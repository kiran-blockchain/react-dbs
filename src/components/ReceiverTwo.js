import { useSelector } from "react-redux";

const ReceiverTwo = () => {

    //to access the reducer we will use useSelector hook
    let counter = useSelector(x=>x);
    return (
        <div>
           <h6>Second Count:{counter.count}</h6>
           
        </div>
    )
}

export default ReceiverTwo