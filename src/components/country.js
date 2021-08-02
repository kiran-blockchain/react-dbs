import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries } from "../store/action";

const CountryList = ()=>{
    const dispatcher = useDispatch();
    const store = useSelector(x=>x.countriesList);
    console.log(store);
    useEffect(()=>{
       dispatcher(fetchCountries());
    },[])
    return (
        <select>
        
        {  store.countries.map((x,index)=>{
            return <option>{x.name}</option>
        })
        }
    </select>
    )

}
export default CountryList;