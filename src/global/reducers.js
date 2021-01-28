import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import actions from "./actions";
import { combineReducers } from "redux";
import getTheme from "./theme";

const initialThemeState = {
  theme: getTheme(),
  text: "light",
};

const themeReducer = (
  state = initialThemeState,
  { type, payload } = actions
) => {
  switch (type) {
    case "MODE_CHANGE": {
      return toggleMode(payload, state);
    }
    default:
      return state;
  }
};

// --------------------------------------------

const reducers = combineReducers({
  theme: themeReducer,
});

export default reducers;

// ---------------------------------------------
const toggleMode = ({ mode } = payload, state) => {
  console.log(`fuck mode with ${mode}`);

  state.theme = getTheme(mode);
  state.text = mode;
  return state;
};
