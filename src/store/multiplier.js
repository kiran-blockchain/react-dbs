const initialState = {
    count: 100
}
const multiplier = (state = initialState, action) => {

    switch (action.type) {
        case 'Multiply':
            let updatedState = state;
            updatedState.count = updatedState.count*10;
            return {...state,count:updatedState.count}
        //increemnt count
       
        default:
            return state;
        //return initial value
    }

}

export default multiplier;