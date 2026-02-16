import { Box, Typography, IconButton } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function Topbar({ toggleTheme }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end", mr: 2 }}>
      <IconButton onClick={toggleTheme}>
        <DarkModeIcon />
      </IconButton>
    </Box>
  );
}
