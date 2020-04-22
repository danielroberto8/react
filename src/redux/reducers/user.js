import swal from "sweetalert";

const init_state = {
  id: 0,
  username: "",
  fullname: "",
  role: "",
  testing: "",
  testing2: "",
  errmsg: "",
  isLogged: false,
};

export default (state = init_state, action) => {
  if (action.type === "ON_CHANGE_USERNAME") {
    return { ...state, username: action.payload };
  } else if (action.type === "ON_LOGIN_SUCCESS") {
    swal("Yeay!", "login berhasil", "success");
    const { username, fullname, role, id } = action.payload;
    return {
      ...state,
      username,
      fullname,
      role,
      id,
      errmsg: "",
      isLogged: true,
    };
  } else if (action.type === "ON_LOGIN_FAILED") {
    swal("Oops...", action.payload, "error");
    return { ...state, isLogged: false };
  } else if (action.type === "ON_SUCCESS_REGIS") {
    swal("Yeay!", "Pendaftaran Berhasil", "success");
    const { username } = action.payload;
    return { ...state, username, isLogged: true };
  } else if (action.type === "ON_FAILED_REGIS") {
    swal("Oops...", action.payload, "error");
    return { ...state, username: "", isLogged: false };
  } else if (action.type === "ON_USER_LOGOUT") {
    return { ...state, username: "", isLogged: action.payload };
  }
  return { ...state };
};
