import React, { createContext, useContext, useEffect, useState } from 'react';
const dhContext = createContext();


const DhProvider = ({ children })=> {
    const [data1, setData] = useState("");


    useEffect(() => {
        // setData("hello")
    },[])
    
    return (
        <dhContext.Provider value={{data1, setData}}>
            {children}
        </dhContext.Provider>
    )
}

export const DhState = () => {
    return useContext(dhContext);
   
  };


export default DhProvider
