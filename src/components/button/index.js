 const Button =(props)=>{
     return(
        <button class="btn btn-primary" name="increment" onClick={
            e=>{
               props.handleClick(e); 
            }
        }>Increment</button>
     )
 }

 export default Button;