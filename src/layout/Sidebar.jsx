import * as React from "react";
import { Drawer, Box, Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import MenuContent from "./MenuContent";

const drawerWidth = 260;

export default function Sidebar({ mobileOpen, handleDrawerToggle }) {
  const theme = useTheme();

  const drawerContent = (
    <>
      <Box sx={{ p: 3 }}>
        <Typography variant="h6" fontWeight={600}>
          MUI-web
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Web app
        </Typography>
      </Box>

      <Divider />

      <Box sx={{ flexGrow: 1, overflow: "auto" }}>
        <MenuContent />
      </Box>
    </>
  );

  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            borderRight: `1px solid ${theme.palette.divider}`,
          },
        }}
        open
      >
        {drawerContent}
      </Drawer>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}
