export const increment = () => {
    return {
        type: 'Increment'
    }
}
export const decrement = () => {
    return { type: 'Decrement' }
}
export const multiply = () => {
    return { type: 'Multiply' }
}
export const fetchCountries = () => {
    return (dispatch) => {
        dispatch(fetchCountriesCall())
        fetch("https://restcountries.eu/rest/v2/all")
            .then(result => {
                return result.json();
            }).then(data => {
                //return data;
                dispatch(fetchCountriesSuccess(data))
            }).catch(ex => {
                dispatch(fetchCountriesFailure())
            })
    }
}

const fetchCountriesCall = () => {
    return {
        type: "countrieslist.calling",
        data: []
    }
}
const fetchCountriesSuccess = (data) => {
    return {
        type: "countrieslist.success",
        data: data
    }
}
const fetchCountriesFailure = (data) => {
    return {
        type: "countrieslist.failure",
        data: []
    }
}