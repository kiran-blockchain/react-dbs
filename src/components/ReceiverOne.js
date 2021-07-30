import { useSelector } from "react-redux"

const ReceiverOne = () => {
   let counter = useSelector(x=>{
       console.log(x);
       return x;
   });
    return (
        <div>
           <h6>Count:{counter.count}</h6>
           
        </div>
    )
}

export default ReceiverOne