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

  const handleLeadsList = async (e) => {
    e.preventDefault();
    props.history.push("/leads");
  };
  return (
    <div style={{ padding: 10 }}>
      <div className={styles.dashboardPage}>
        <h1>Welcome, {userDetails.username}</h1>

        <button className={styles.logoutBtn} onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div>
        <button onClick={handleLeadsList}>Leads List</button>
      </div>
    </div>
  );
}

export default Dashboard;
