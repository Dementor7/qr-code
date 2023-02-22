import React, { useState } from "react";
import MaterialTable from "@material-table/core";

const UserTable = () => {
  let _b = [
    {
      Email: "N",
      PhoneNumber: "N",
      RoomNumber: "N",
      RoolNumber: "N",
      department: "N",
    },
  ];

  let _a = JSON.parse(localStorage.getItem("student")) || _b;

  const [temp, settemp] = useState(_a);

  const columns = [
    { title: "Id", field: "id" },
    { title: "Student Email", field: "Email" },
    { title: "PhoneNumber", field: "PhoneNumber" },
    { title: "RollNumber", field: "RoolNumber" },
    { title: "RoomNumber", field: "RoomNumber" },
    { title: "department", field: "department" },
  ];

  return (
    <div className="container my-5">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <MaterialTable
        columns={columns}
        title={"UserList"}
        options={{
          actionsColumnIndex: -1,
          exportButton: {
            csv: true,
            pdf: true,
          },
          columnResizable: true,
          filtering: false,
          search: true,
          sorting: true,
          paging: true,
          pageSize: 20,
          emptyRowsWhenPaging: false,
          pageSizeOptions: [6, 12, 20, 50],
          headerStyle: {
            backgroundColor: "#8FD6E1",
            color: "#03256C",
          },
          cellStyle: {
            textAlign: "left",
            fontSize: "14px",
            padding: "5px",
          },
        }}
        localization={{
          toolbar: {
            exportCSVName: "Export some Excel format",
            exportPDFName: "Export as pdf!!",
          },
        }}
        editable={{
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...temp];
                const index = oldData?.tableData?.id;
                dataUpdate[index] = newData;
                settemp([...dataUpdate]);
                resolve();
              }, 1000);
            }),

          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...temp];
                const index = oldData?.tableData?.id;
                dataDelete.splice(index, 1);
                settemp([...dataDelete]);
                resolve();
              }, 1000);
            }),
        }}
        data={
          temp?.length > 0
            ? temp?.sort()?.map((e, i) => {
                return {
                  ...e,
                  id: i,
                };
              })
            : null
        }
      />
    </div>
  );
};

export default UserTable;
