import React from "react";
import CCSelect from "../../components/TablePage/CCList";
import { LeadList } from "../../components/TablePage/LeadList";

function Leads() {
  return (
    <div style={{ padding: 10 }}>
      <LeadList />
      <CCSelect />
    </div>
  );
}

export default Leads;
