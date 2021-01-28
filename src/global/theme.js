import { createMuiTheme } from "@material-ui/core/styles";

const theme = {
  light: {
    palette: {
      primary: {
        main: "#4ae8e5", //blue
      },
    },
  },
  dark: {
    palette: {
      primary: {
        main: "#e8db4a", //yellow
      },
    },
  },
};

const getTheme = (mode) =>
  createMuiTheme({
    ...theme[mode ? mode : "light"],
  });

export default getTheme;
