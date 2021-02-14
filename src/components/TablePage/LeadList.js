import React, { useContext, useEffect } from "react";

import { LeadsContext } from "../../contexts/leadsContext";

export const LeadList = () => {
  const { leads, getLeads } = useContext(LeadsContext);

  useEffect(() => {
    getLeads();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ul id="list" className="list">
        {leads.map((lead) => (
          <li key={lead.id}>{lead.name}</li>
        ))}
      </ul>
    </>
  );
};
