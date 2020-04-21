export const todoListInputHandler = (text) => {
  return {
    type: "ON_CLICK_TODO_INPUT",
    payload: text,
  };
};
