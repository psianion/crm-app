import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import DailyReportTable from "./dailyReportTable";

let token = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).token
  : "";

function ApiDashboard() {
  const [state, setState] = useState({
    activeLeadCount: "",
    todayConvertedCount: "",
    UnassignedCount: "",
    isLoading: false,
    dailyReport: [],
  });

  async function dailyReport() {
    const to_date = moment().format("YYYY-MM-DD");
    const from_date = moment().subtract(1, "days").format("YYYY-MM-DD");

    try {
      const res = await axios({
        url: "/api/ccwise",
        method: "POST",
        timeout: 8000,
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
        data: {
          to_date,
          from_date,
        },
      }).then((res) => {
        setState({ ...state, dailyReport: res.data.data });
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function getDashboard() {
    setState({ ...state, isLoading: true });

    try {
      const res = await axios({
        url: "/api/dashboard",
        method: "POST",
        timeout: 8000,
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      }).then((res) => {
        setState({
          ...state,
          isLoading: false,
          activeLeadCount: res.data.data.activeLeadCount,
          todayConvertedCount: res.data.data.todayConvertedCount,
          UnassignedCount: res.data.data.unassigned_leads.length,
        });
      });
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getDashboard();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div>
        <div>
          <h3>Active Leads</h3>
          <p>{state.activeLeadCount}</p>
        </div>
        <div>
          <h3>Todays Leads</h3>
          <p>{state.todayConvertedCount}</p>
        </div>
        <div>
          <h3>Active Leads</h3>
          <p>{state.UnassignedCount}</p>
        </div>
      </div>
      <div>
        <button onClick={dailyReport}>One</button>
        <button>Two</button>
        <button>Three</button>
      </div>
      <div>
        <DailyReportTable dailyReport={state.dailyReport} />
      </div>
    </>
  );
}

export default ApiDashboard;
