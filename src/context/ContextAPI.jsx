import { createContext, useContext, useEffect, useState } from "react";

const ContextAPI = createContext();
export const DataProvider = ({ children }) => {
    const [users, setUsers] = useState([])
    const url = "https://jsonplaceholder.typicode.com/users";
    const fetchData = () => {
        fetch(url).then(res => res.json()).then(data => {
            console.log(data[0]);
            setUsers(data)
        })
    }
    useEffect(() => {
      fetchData()
    }, []);

    return (
        <ContextAPI.Provider value={{users}}>
            {children}
        </ContextAPI.Provider>
    )
}



export const useContextData = () => useContext(ContextAPI);