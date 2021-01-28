import React, { useEffect, useState } from "react";
import actions from "./global/actions";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import ButtonRef from "./components/menu/button";

const App = () => {
  const dispatch = useDispatch();
  const globalTheme = useSelector((state) => state.theme.theme);
  const toggleMode = (e) => {
    dispatch(actions._toggleMode({ mode: e }));
  };
  const themeObj = React.useMemo(() => globalTheme);
  return (
    <ThemeProvider theme={themeObj}>
      <CssBaseline />
      <div>
        <ButtonRef />
        <button
          onClick={() => {
            toggleMode("dark");
          }}
        >
          TOOGLE DARK MODE
        </button>
        <button
          onClick={() => {
            toggleMode("light");
          }}
          color="primary"
        >
          TOOGLE LIGHT MODE
        </button>
      </div>
    </ThemeProvider>
  );
};

export default App;
