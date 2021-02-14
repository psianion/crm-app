import React, { createContext, useReducer } from "react";
import axios from "axios";
import ccsReducer from "../reducers/ccsReducer";

//Initial State
const initialState = {
  ccs: [],
  error: null,
  loading: true,
};

let token = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).token
  : "";

//Create Context
export const CCsContext = createContext(initialState);

//Provider Component
export const CCsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ccsReducer, initialState);

  //Actions
  async function getCCs() {
    try {
      const res = await axios({
        url: "/api/ccList?req=1",
        method: "POST",
        timeout: 8000,
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      });
      dispatch({
        type: "GET_CCS",
        payload: res.data.data["cc list"],
      });
      console.log(res.data.message);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <CCsContext.Provider
      value={{
        ccs: state.ccs,
        error: state.error,
        loading: state.loading,
        getCCs,
      }}
    >
      {children}
    </CCsContext.Provider>
  );
};
