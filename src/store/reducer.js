const initialState = {
    count: 100
}
const countReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'Increment':
            let updatedState = state;
            updatedState.count += 1;
            return {...state,count:updatedState.count}
        //increemnt count
        case 'Decrement':
            let decrementState = state;
            decrementState.count -= 1;
            return {...state,count:decrementState.count}
        //decrement count
        default:
            return state;
        //return initial value
    }

}

export default countReducer;