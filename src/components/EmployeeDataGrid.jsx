import { DataGrid } from "@mui/x-data-grid";
import useAxios from "../hooks/useAxios";
import axios from "axios";

const EmployeeDataGrid = () => {
  const url = "http://localhost:3002/employees";
  const { data, loading, error } = useAxios(url);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 50,
    },
    {
      field: "status",
      headerName: "Status",
      renderCell: (params) => {
        const statusColors = {
          active: "green",
          "on leave": "yellow",
          inactive: "red",
        };
        const color = statusColors[params.value] || "gray";
        return (
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: color,
                display: "inline-block",
              }}
            />
            <span style={{ textTransform: "capitalize" }}>
              {params.value || ""}
            </span>
          </div>
        );
      },
    },
    { field: "name", headerName: "Name", width: 140 },
    {
      field: "position",
      headerName: "Position",
      width: 160,
      editable: true,
    },
    {
      field: "department",
      headerName: "Department",
    },
    {
      field: "salary",
      headerName: "Salary",
    },
  ];

  console.log("Data: ", data);

  const handleSave = (id, updatedRow) => {
    axios
      .put(`http://localhost:3002/employees/${id}`, updatedRow)
      .then((response) => {
        console.log("Response: ", response);
      });
  };

  return (
    <div>
      <DataGrid
        rows={data ?? []}
        columns={columns}
        loading={loading}
        processRowUpdate={(updatedRow, originalRow) => {
          console.log(
            "Updated row: ",
            updatedRow,
            "Original row: ",
            originalRow
          );
          handleSave(originalRow.id, updatedRow);
          return updatedRow;
        }}
        onProcessRowUpdateError={(error) => console.log("Error: ", error)}
      />
    </div>
  );
};

export default EmployeeDataGrid;
