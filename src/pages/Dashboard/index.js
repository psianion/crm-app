import { logout } from "../../actions/authAction";
import { useAuthDispatch, useAuthState } from "../../contexts/authContext";
import styles from "./dashboard.module.css";
import React, { useContext, useEffect, useState } from "react";
import { LeadsContext } from "../../contexts/leadsContext";
import { Tabs, Tab, Content } from "./tabs";
import Leads from "../Leads";
import ApiDashboard from "../../components/StatisticsPage/apiDashboard";

function Dashboard(props) {
  const dispatch = useAuthDispatch();
  const userDetails = useAuthState();

  const { getLeads } = useContext(LeadsContext);

  {
    /* STATUS_INTRESTED=4
STATUS_NOT_INTRESTED=3
STATUS_NO_REQUIREMENT=2
STATUS_NEW=-1
STATUS_RNR=0
STATUS_OTHER=1
STATUS_TRASH=5 */
  }

  useEffect(() => {
    getLeads();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [active, setActive] = useState(0);
  const handleClick = (e) => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };

  const handleLogout = () => {
    logout(dispatch);
    props.history.push("/login");
  };

  return (
    <div style={{ padding: 10 }}>
      <div className={styles.dashboardPage}>
        <h1>Welcome, {userDetails.username}</h1>

        <button className={styles.logoutBtn} onClick={handleLogout}>
          Logout
        </button>
      </div>
      <Tabs>
        <Tab onClick={handleClick} active={active === 0} id={0}>
          Leads
        </Tab>
        <Tab onClick={handleClick} active={active === 1} id={1}>
          Statistics
        </Tab>
        <Tab onClick={handleClick} active={active === 2} id={2}>
          Users
        </Tab>
        <Tab onClick={handleClick} active={active === 3} id={3}>
          Profile
        </Tab>
      </Tabs>
      <>
        <Content active={active === 0}>
          <Leads />
        </Content>
        <Content active={active === 1}>
          <ApiDashboard />
        </Content>
        <Content active={active === 2}>
          <h1>Users</h1>
        </Content>
        <Content active={active === 3}>
          <h1>Profile</h1>
        </Content>
      </>
    </div>
  );
}

export default Dashboard;
