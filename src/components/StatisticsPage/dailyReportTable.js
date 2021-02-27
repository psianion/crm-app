import React from "react";
import MUIDataTable from "mui-datatables";

const DailyReportTable = ({ dailyReport }) => {
  const columns = [
    {
      name: "name",
      label: "Name",
      options: {
        filter: true,
        sort: true,
      },
    },
  ];

  const data = dailyReport.map((lead) => {
    const container = {};
    container.name = lead.cc_name;
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

export default DailyReportTable;
