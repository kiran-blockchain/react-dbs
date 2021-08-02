import { UserContext } from "./user";

const Consumer =()=>{

    return<UserContext.Consumer>
        {data=>{
            console.log(data);
            return <div>I am the consumer</div>
        }}
    </UserContext.Consumer>
};
const ConsumerWrapper =()=>{
    return <Consumer/>
}

export { Consumer,ConsumerWrapper};