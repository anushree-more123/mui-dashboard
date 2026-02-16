import { Drawer, Box, Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import MenuContent from "./MenuContent";

const drawerWidth = 260;

export default function Sidebar() {
  const theme = useTheme();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          borderRight: `1px solid ${theme.palette.divider}`,
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
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
    </Drawer>
  );
}
