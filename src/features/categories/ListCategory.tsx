import { Box, Button, IconButton, Typography } from "@mui/material";
import { useAppSelector } from "../../app/hooks";
import { selectCategories } from "./categorySlice";
import { Link } from "react-router-dom";
import { DataGrid, GridColDef, GridRenderCellParams, GridRowsProp, GridToolbar } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';


export const CategoryList = () => {
  const categories = useAppSelector(selectCategories);

const slotProps = {
  toolbar: {
    showQuickFilter: true,
    quickFilterProps: { debounceMs: 500 },
  },
};

  // user categories to create rows 
  const rows: GridRowsProp = categories.map((category) => ({
    id: category.id,
    name: category.name,
    isActive: category.is_active,
    description: category.description,
    created_at: new Date(category.created_at).toLocaleDateString("pt-BR"),

  }));


  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      renderCell: renderNameCell
    },
    {
      field: 'isActive',
      headerName: 'Active',
      flex: 1,
      type: "boolean",
      renderCell: renderIsActiveCell,
    },
    {
      field: 'created_at',
      headerName: 'Created at',
      flex: 1,
    },
    {
      field: 'id',
      headerName: 'Actions',
      flex: 1,
      renderCell: renderActionsCell,
    },


  ];

  function renderNameCell(rowData: GridRenderCellParams) {
    return (
      <Link 
        style={{textDecoration: 'none'}}
        to={`/categories/edit/${rowData.id}`}
      >
        <Typography color="primary">{rowData.value}</Typography>
      </Link>
    )
  }

  function renderActionsCell(rowData: GridRenderCellParams) {
    return (
      <IconButton
        color="secondary"
        on-Click={() => console.log("clicked")}
        aria-label="delete"
      >
        <DeleteIcon />
      </IconButton>
    )
  }

  function renderIsActiveCell(rowData: GridRenderCellParams) {
    return (
      <Typography color={rowData.value ? "primary" : "secondary"}>
        {rowData.value ? "Active" : "Inactive"}
      </Typography>
    );
  }


  return (
    <Box maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box display="flex" justifyContent="flex-end">
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/categories/create"
          style={{ marginBottom: "1rem" }}
        >
          New Category
        </Button>
      </Box>

      {/* {categories.map((category) => (
        <Typography key={category.id}>{category.name}</Typography>
      ))} */}

      <Box sx={{ display: "flex", height: 450 }}>
        <DataGrid
          rows={rows}
          columns={columns}
           disableColumnFilter={true}
           disableColumnSelector={true}
           disableDensitySelector={true}
           disableRowSelectionOnClick={true}
          slots={{ toolbar: GridToolbar }}
          slotProps={slotProps}
          pageSizeOptions={[5, 10, 20, 50, 100]}
        />
      </Box>
    </Box>
  );
}
