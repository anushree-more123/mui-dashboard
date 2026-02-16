import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Box,
  Typography,
} from "@mui/material";

const drawerWidth = 240;

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        "& .MuiDrawer-paper": { width: drawerWidth },
      }}
    >
      <Box p={2}>
        <Typography variant="h6">Sitemark-web</Typography>
        <Typography variant="caption">Web app</Typography>
      </Box>

      <List>
        <ListItemButton selected>
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="Analytics" />
        </ListItemButton>
      </List>
    </Drawer>
  );
}
