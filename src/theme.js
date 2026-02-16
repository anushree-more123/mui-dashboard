import { createTheme } from "@mui/material/styles";

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      primary: { main: "#2563eb" },
      background: {
        default: mode === "dark" ? "#0b0f19" : "#f4f6f8",
        paper: mode === "dark" ? "#111827" : "#ffffff",
      },
    },
    shape: { borderRadius: 12 },
    typography: {
      fontFamily: "Inter, sans-serif",
    },
  });
