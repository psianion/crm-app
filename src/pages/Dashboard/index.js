import React from "react";
import { logout } from "../../actions/authAction";
import { useAuthDispatch, useAuthState } from "../../contexts/authContext";
import styles from "./dashboard.module.css";

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
        <button className={styles.logoutBtn} onClick={handleLogout}>
          Logout
        </button>
      </div>
      <p>Welcome</p>
    </div>
  );
}

export default Dashboard;
