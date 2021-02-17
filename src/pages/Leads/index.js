import React from "react";
import { logout } from "../../actions/authAction";
import { useAuthDispatch, useAuthState } from "../../contexts/authContext";
import { LeadList } from "../../components/TablePage/LeadList";
import styles from "./leads.module.css";
import CCList from "../../components/TablePage/CCList";

function Leads(props) {
  const dispatch = useAuthDispatch();
  const userDetails = useAuthState();

  const handleLogout = () => {
    logout(dispatch);
    props.history.push("/login");
  };
  return (
    <div style={{ padding: 10 }}>
      <div className={styles.leadsPage}>
        <h1>Welcome, {userDetails.username}</h1>

        <button className={styles.logoutBtn} onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div>
        <LeadList />
        <CCList />
      </div>
    </div>
  );
}

export default Leads;
