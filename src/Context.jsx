import React from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { useState } from "react";
import { reducer } from "./reducer";

export const AppContext = createContext();

const Context = ({ children }) => {

    // const [data, setData] = useState([]);
    // const [company, setCompany] = useState("TOMMY");

const initialState = {
    data: [],
    company: "TOMMY"
}


const[state,dispatch] = useReducer(reducer,initialState)
console.log(state)


  return <AppContext.Provider value={[state,dispatch]}>{children}</AppContext.Provider>;
};

export default Context;
