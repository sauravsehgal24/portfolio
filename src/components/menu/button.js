import React, { useEffect, useState } from "react";
import actions from "../../global/actions";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import store from "../../global/store";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => {
  return {
    button: {
      backgroundColor: theme.palette.primary.main,
    },
  };
});

const ButtonRef = () => {
  const dispatch = useDispatch();
  const c = useStyles();
  const text = useSelector((state) => state.theme.text);

  return (
    <Button variant="contained" color="primary">
      {text}
    </Button>
  );
};

export default ButtonRef;
