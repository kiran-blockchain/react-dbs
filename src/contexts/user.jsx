import react, { createContext, useState } from 'react';
const UserContext = createContext();
//Create a Wrapper Component called UserProvider
const UserProvider = ({children}) => {
    const [userDetails, setUserDetails] = useState({ usename: "Kiran" });
    const setDetailsFn = (data) => {
        setUserDetails({ ...userDetails, ...data });
    }
    return (
        <UserContext.Provider value={{userDetails,setDetailsFn}}>
            {children}
        </UserContext.Provider>
    )
}

export { UserProvider,UserContext};
