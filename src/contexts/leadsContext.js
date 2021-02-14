import React, { createContext, useReducer } from "react";
import axios from "axios";
import leadsReducer from "../reducers/leadsReducer";

//Initial State
const initialState = {
  leads: [],
  error: null,
  loading: true,
};

let token = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).token
  : "";

//Create Context
export const LeadsContext = createContext(initialState);

//Provider Component
export const LeadsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(leadsReducer, initialState);

  //Actions
  async function getLeads() {
    try {
      const res = await axios({
        url: "/api/getLeadList?Active=1",
        method: "POST",
        timeout: 8000,
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      });
      dispatch({
        type: "GET_LEADS",
        payload: res.data.data.leads,
      });
      console.log(res.data.message);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <LeadsContext.Provider
      value={{
        leads: state.leads,
        error: state.error,
        loading: state.loading,
        getLeads,
      }}
    >
      {children}
    </LeadsContext.Provider>
  );
};
