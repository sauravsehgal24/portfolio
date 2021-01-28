const _toggleMode = (payload) => {
  return {
    type: "MODE_CHANGE",
    payload: payload,
  };
};

export default {
  _toggleMode,
};
