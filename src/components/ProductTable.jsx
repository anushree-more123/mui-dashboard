import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { columns, rows } from "../data/gridData";

export default function ProductTable() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        "& .MuiDataGrid-root": {
          border: "none",
          fontSize: 14,
        },
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor:
            theme.palette.mode === "dark" ? "#0f172a" : theme.palette.grey[100],
          borderBottom: `1px solid ${theme.palette.divider}`,
        },

        "& .MuiDataGrid-columnHeaderTitle": {
          fontWeight: 600,
        },
        "& .MuiDataGrid-row": {
          borderBottom: `1px solid ${theme.palette.divider}`,
        },

        "& .MuiDataGrid-row.even": {
          backgroundColor:
            theme.palette.mode === "dark"
              ? "rgba(255,255,255,0.02)"
              : theme.palette.grey[50],
        },

        "& .MuiDataGrid-row:hover": {
          backgroundColor: theme.palette.action.hover,
        },

        "& .MuiDataGrid-cell": {
          borderBottom: "none",
        },
        "& .MuiDataGrid-footerContainer": {
          borderTop: `1px solid ${theme.palette.divider}`,
        },

        "& .MuiTablePagination-root": {
          fontSize: 13,
        },
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        disableColumnMenu
        disableRowSelectionOnClick
        density="compact"
        pageSizeOptions={[10, 20, 50]}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 20, page: 0 },
          },
        }}
        getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
        }
      />
    </Box>
  );
}
