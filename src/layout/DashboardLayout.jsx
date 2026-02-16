import * as React from "react";
import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function DashboardLayout({ children, toggleTheme }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Topbar
        toggleTheme={toggleTheme}
        handleDrawerToggle={handleDrawerToggle}
      />

      <Sidebar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "1700px",
            mx: "auto",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}
