import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import { useMemo, useState } from "react";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const [mode, setMode] = useState("dark");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Dashboard
        toggleTheme={() => setMode(mode === "dark" ? "light" : "dark")}
      />
    </ThemeProvider>
  );
}
