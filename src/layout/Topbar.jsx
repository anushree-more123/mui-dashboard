import { Box, Typography, IconButton } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function Topbar({ toggleTheme }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
      <Typography variant="h5">Dashboard</Typography>
      <IconButton onClick={toggleTheme}>
        <DarkModeIcon />
      </IconButton>
    </Box>
  );
}
