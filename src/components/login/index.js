import { useState, useEffect } from "react";
import DropdownOptions from "../../dropdownOptions";

const Login = () => {
    const initialValues = {
        email: "",
        username: "",
        country: "",
        gender: ''
    }
    const [userDetails, userDetailsChange] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validate = (data) => {
        let errors = {};
        if (data.email == '') {
            errors.email = "Email is required";
        }
        return errors;
    };
    const onDataChange = (e) => {
        console.log(e.target.name);
        userDetailsChange({
            ...userDetails,
            [e.target.name]: e.target.value
        })
    };
    const [countryList, countyListFetch] = useState(
        [{ name: "India", value: "IND" },
        { name: "United States", value: "USA" }]);

    useEffect(() => {
        fetch("https://restcountries.eu/rest/v2/all").then(result => {
            return result.json()
        }).then(data => {

            let mappedData = data.map(x => {
                return { name: x.name, value: x.alpha3Code };
            });
            countyListFetch(mappedData);
        });
    }, []);

    // const showError = (status) => {
    //     let success = (<div class="alert alert-success" role="alert">
    //         Successful Validation
    //     </div>);
    //     let failure = (<div class="alert alert-danger" role="alert">
    //         There are errors on the page.
    //     </div>)
    //     if (formErrors.email)
    //         return failure;
    //     else
    //         return success;
    // };
    const handleSubmit = (e)=>{
        e.preventDefault();
        let errors = validate(userDetails);
        setFormErrors(errors);
        setIsSubmitting(true);
    }
    return (
        <div>
            <form onSubmit={handleSubmit} noValidate>
            {/* {showError(formErrors)} */}

            <div class="row mb-3">
                <label htmlFor="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-6">
                    <input type="email"
                        class="form-control"
                        id="inputEmail3"
                        value={userDetails.email}
                        name="email"
                        onChange={onDataChange}
                    />
                </div>
                {formErrors.email&&(<span className="error">Enter valid Input</span>)}
            </div>
            <div class="row mb-3">
                <label htmlFor="username" class="col-sm-2 col-form-label">username</label>
                <div class="col-sm-6">
                    <input type="text"
                        class="form-control"
                        id="username"
                        value={userDetails.username}
                        name="username"
                        onChange={onDataChange}
                    />
                </div>
            </div>
            <div class="row mb-3">
                <label htmlFor="country" class="col-sm-2 col-form-label">Country</label>
                <div class="col-sm-6">
                    <select name="country" class="form-control"
                        onChange={onDataChange}>
                        <DropdownOptions list={countryList} />
                    </select>
                </div>
            </div>
            <div class="row mb-3">
                <label class="col-sm-2 col-form-label">Gender</label>
                <div class="col-sm-6">
                    <input type="radio" name="gender" value="M"
                        checked={userDetails.gender == "M"}
                        onChange={onDataChange}
                    />Male
                    <input type="radio" name="gender" value="F"
                        checked={userDetails.gender == "F"}
                        onChange={onDataChange} />Female
                </div>
            </div>
            <button type="submit">Login</button>
            </form>
            <pre>
                {JSON.stringify(userDetails)}
            </pre>
        </div>
    );
}

export default Login;