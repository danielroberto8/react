export const todoInputHandler = (text) => {
  return {
    type: "ON_CHANGE_TODO_INPUT",
    payload: text,
  };
};

export const addTodoHandler = (todoItem) => {
  return {
    type: "ON_CLICK_TODO_INPUT",
    payload: todoItem,
  };
};
