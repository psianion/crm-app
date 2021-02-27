import React, { useContext, useEffect } from "react";

import { LeadsContext } from "../../contexts/leadsContext";
import MUIDataTable from "mui-datatables";

export const LeadList = () => {
  const { leads } = useContext(LeadsContext);

  const columns = [
    {
      name: "name",
      label: "Name",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "organisation",
      label: "Organisation",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "location",
      label: "Location",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "pmobile",
      label: "Primary Contact",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "email",
      label: "Email",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "lead_status",
      label: "Status",
      options: {
        filter: true,
        sort: true,
      },
    },
  ];

  const data = leads.map((lead) => {
    const container = {};
    container.name = lead.name;
    container.organisation = lead.organisation;
    container.location = lead.location;
    container.pmobile = lead.pmobile;
    container.email = lead.email;
    container.lead_status = lead.lead_status;
    return container;
  });

  const options = {
    filterType: "checkbox",
    rowsPerPage: 5,
    rowsPerPageOptions: [5, 10, 20, 50],
    filterType: "multiselect",
    fixedSelectColumn: true,
  };

  return (
    <>
      <MUIDataTable
        title={"Leads List"}
        data={data}
        columns={columns}
        options={options}
      />
    </>
  );
};
