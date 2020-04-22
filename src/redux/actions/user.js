import Axios from "axios";
import { API_URL } from "../../constants/API";

export const userInputHandler = (text) => {
  return {
    type: "ON_CHANGE_USER_INPUT",
    payload: text,
  };
};

export const loginHandler = (userData) => {
  const { username, password } = userData;

  return (dispatch) => {
    Axios.get(`${API_URL}/users`, {
      params: {
        username,
        password,
      },
    })
      .then((res) => {
        if (res.data.length > 0) {
          dispatch({
            type: "ON_LOGIN_SUCCESS",
            payload: res.data[0],
          });
        } else {
          dispatch({
            type: "ON_LOGIN_FAILED",
            payload: "username atau password salah",
          });
        }
      })
      .catch((res) => {
        console.log(res);
      });
  };
};

export const logoutHandler = (status) => {
  return {
    type: "ON_USER_LOGOUT",
    payload: status,
  };
};

export const registerHandler = (userData) => {
  const { username, fullname, password, role } = userData;

  return (dispatch) => {
    Axios.get(`${API_URL}/users`, { params: { username } })
      .then((res) => {
        if (res.data.length == 0) {
          Axios.post(`${API_URL}/users`, {
            username,
            fullname,
            password,
            role,
          })
            .then((res) => {
              dispatch({
                type: "ON_SUCCESS_REGIS",
                payload: res.data,
              });
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          dispatch({
            type: "ON_FAILED_REGIS",
            payload: "Username sudah dipakai",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
