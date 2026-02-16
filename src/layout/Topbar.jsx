import React from "react";
import { Box, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function Topbar({ toggleTheme, handleDrawerToggle }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      sx={{
        position: "fixed",
        top: 16,
        right: 24,
        zIndex: theme.zIndex.drawer + 1,
        display: "flex",
        gap: 1,
      }}
    >
      <IconButton
        onClick={handleDrawerToggle}
        sx={{
          display: { xs: "flex", md: "none" },
          backgroundColor: theme.palette.background.paper,
          border: `1px solid ${theme.palette.divider}`,
        }}
      >
        <MenuIcon />
      </IconButton>

      <IconButton
        onClick={toggleTheme}
        sx={{
          backgroundColor: theme.palette.background.paper,
          border: `1px solid ${theme.palette.divider}`,
        }}
      >
        {isDark ? <DarkModeIcon /> : <LightModeIcon />}
      </IconButton>
    </Box>
  );
}
