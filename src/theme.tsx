import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      light: "#439784",
      main: "#147d66",
      dark: "#0e5747",
      contrastText: "#fff",
    },
    secondary: {
      light: "#70be73",
      main: "#4DAE50",
      dark: "#357938",
      contrastText: "#fff",
    },
    warning: {
      main: "#ff9800",
    },
    success: {
      light: "#439784",
      main: "#147d66",
      dark: "#0e5747",
      contrastText: "#fff",
    },
    text: {
      primary: "#000000de",
      secondary: "#0000008a",
      disabled: "#00000061",
    },
    error: {
      main: "#f44336",
    },
  },
});
