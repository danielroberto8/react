import React from "react";
import { Link, Redirect } from "react-router-dom";
import Axios from "axios";
import { API_URL } from "../../constants/API";

class Login extends React.Component {
  state = {
    users: [],
    usernameLogin: "",
    passwordLogin: "",
    currentUser: "",
    isLogged: false,
  };

  componentDidMount = () => {
    Axios.get(`${API_URL}/users`)
      .then((res) => {
        this.setState({ users: res.data });
      })
      .catch((err) => {
        alert("Koneksi error");
        console.log(err);
      });
  };

  inputHandler = (e, field) => {
    this.setState({ [field]: e.target.value });
  };

  login = () => {
    const { usernameLogin, passwordLogin, users } = this.state;
    for (let i = 0; i < users.length; i++) {
      if (
        usernameLogin == users[i].username &&
        passwordLogin == users[i].password
      ) {
        this.setState({ isLogged: true });
        this.setState({ currentUser: users[i].username });
        return alert("login berhasil");
      }
    }
    return alert("login gagal");
  };
  render() {
    const { currentUser, isLogged } = this.state;

    if (!isLogged) {
      return (
        <div
          className="App container p-8"
          style={{ width: "50%", marginTop: "10%" }}
        >
          <h2 className="text-center">Welcome</h2>
          <label for="usernameLogin">username</label>
          <input
            type="text"
            className="form-control"
            id="usernameLogin"
            placeholder="Masukkan username"
            onChange={(e) => {
              this.inputHandler(e, "usernameLogin");
            }}
          />
          <label for="passwordLogin">password</label>
          <input
            type="password"
            className="form-control"
            id="passwordLogin"
            placeholder="Password"
            onChange={(e) => {
              this.inputHandler(e, "passwordLogin");
            }}
          />
          <input
            type="button"
            className="btn btn-primary mt-3"
            id="btnLogin"
            value="Login"
            onClick={this.login}
          />
          <div>
            belum memiliki akun? silahkan daftar{" "}
            <Link to={"/daftar"}>di sini</Link>
          </div>
        </div>
      );
    } else {
      return <Redirect to={`/profile/${currentUser}`} />;
    }
  }
}

export default Login;
