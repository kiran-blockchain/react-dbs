const initialState = {
    status: "none",
    countries: []
};

export const countriesList = (state = initialState, action) => {
    switch (action.type) {
        case "countrieslist.calling":
            return {...state,status:"Fetch calling",countries:[]}
        //do something;
        case "countrieslist.success":
            return {...state,status:"Fetch Success",countries:action.data}
        //do something
        case "countrieslist.failure":
            return {...state,status:"Fetch Failed",countries:[]}
        //do something
        default:
            return initialState;
    }
}