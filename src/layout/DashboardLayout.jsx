import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function DashboardLayout({ children, toggleTheme }) {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Topbar toggleTheme={toggleTheme} />
        <Box sx={{ p: 3, maxWidth: 1700, mx: "auto", width: "100%" }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
