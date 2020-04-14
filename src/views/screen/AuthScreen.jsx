import React from "react";

class AuthScreen extends React.Component {
  state = {
    user: [
      ["abi", "umi"],
      ["James", "1234"],
    ],
    username: "",
    password: "",
    passwordConfirm: "",
  };

  render() {
    const inputHandler = (e, field) => {
      this.setState({ [field]: e.target.value });
    };

    const checkPassword = (pass, passc) => {
      if (pass == passc) {
        return true;
      } else {
        return false;
      }
    };

    const checkUser = (newUser) => {
      for (let i = 0; i < this.state.user.length; i++) {
        if (newUser == this.state.user[i][0]) {
          return false;
        }
      }
      return true;
    };

    const register = () => {
      let arrNewUser = [];
      if (checkUser(this.state.username) == false) {
        return alert("User sudah ada");
      }
      if (
        checkPassword(this.state.password, this.state.passwordConfirm) == false
      ) {
        return alert("password tidak cocok");
      }

      arrNewUser = this.state.user.slice();
      arrNewUser.push([this.state.username, this.state.password]);
      this.setState({ user: arrNewUser });
      clearInput();
      alert("Registrasi Berhasil");
    };

    const login = () => {
      let arr = this.state.user;
      for (let i = 0; i < arr.length; i++) {
        if (
          this.state.username == arr[i][0] &&
          this.state.password == arr[i][1]
        ) {
          clearInput();
          return alert("Login Berhasil");
        }
      }
      clearInput();
      return alert("Login gagal");
    };

    const clearInput = () => {
      this.refs.username.value = "";
      this.refs.password.value = "";
      this.refs.passwordConfirm.value = "";
      this.refs.usernameLogin.value = "";
      this.refs.passwordLogin.value = "";
      this.setState({ username: "" });
      this.setState({ password: "" });
      this.setState({ passwordConfirm: "" });
    };

    return (
      <div>
        <h3 className="text-center">AUTH SCREEN</h3>
        <div
          className="text-center m-5"
          style={{
            border: "1px solid black",
            borderRadius: "8px",
            width: "fit-content",
            padding: "10px",
          }}
        >
          <div>Register</div>
          <div className="form-group">
            <input
              className="form-control"
              ref="username"
              type="text"
              placeholder="Masukkan username"
              onChange={(e) => inputHandler(e, "username")}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              ref="password"
              type="password"
              placeholder="Masukkan password"
              onChange={(e) => inputHandler(e, "password")}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              ref="passwordConfirm"
              type="password"
              placeholder="Ulangi password"
              onChange={(e) => inputHandler(e, "passwordConfirm")}
            />
          </div>
          <div>
            <input
              className="btn btn-primary"
              type="button"
              value="Daftar"
              onClick={register}
            />
          </div>
        </div>
        <div
          className="text-center m-5"
          style={{
            border: "1px solid black",
            borderRadius: "8px",
            width: "fit-content",
            padding: "10px",
          }}
        >
          <div>Login</div>
          <div></div>
          <div className="form-group">
            <input
              className="form-control"
              ref="usernameLogin"
              type="text"
              placeholder="Masukkan username"
              onChange={(e) => inputHandler(e, "username")}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              ref="passwordLogin"
              type="password"
              placeholder="Masukkan password"
              onChange={(e) => inputHandler(e, "password")}
            />
          </div>
          <div>
            <input
              className="btn btn-primary"
              type="button"
              value="Login"
              onClick={login}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AuthScreen;
