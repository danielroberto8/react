export const userInputHandler = (text) => {
  return {
    type: "ON_CHANGE_USER_INPUT",
    payload: text,
  };
};
