const init_state = {
  id: 0,
  username: "",
};

export default (state = init_state, action) => {
  if (action.type == "ON_CHANGE_USER_INPUT") {
    return { ...state, username: action.payload };
  } else {
    return { ...state };
  }
};
