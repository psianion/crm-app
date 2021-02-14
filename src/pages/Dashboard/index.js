import React from "react";
import { logout } from "../../actions/authAction";
import { useAuthDispatch, useAuthState } from "../../contexts/authContext";

import { LeadList } from "../../components/TablePage/LeadList";
import styles from "./dashboard.module.css";
import { CCList } from "../../components/TablePage/CCList";

function Dashboard(props) {
  const dispatch = useAuthDispatch();
  const userDetails = useAuthState();

  const handleLogout = () => {
    logout(dispatch);
    props.history.push("/login");
  };
  return (
    <div style={{ padding: 10 }}>
      <div className={styles.dashboardPage}>
        <h1>Dashboard</h1>
        <LeadList />
        <CCList />
        <button className={styles.logoutBtn} onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
