import { Padding } from "@mui/icons-material";
import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#e66161ff",
    },
    secondary: {
      main: "#dc004e",
    },
    limeGreen: {
      main: "#00ff00",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
  // components: {
  //   MuiButton: {
  //     styleOverrides: {
  //       root: {
  //         padding: "2px",
  //         margin: "2px",
  //       },
  //     },
  //   },
  // },
});

export default theme;
