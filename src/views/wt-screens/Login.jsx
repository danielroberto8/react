import React from "react";
import { Link, Redirect } from "react-router-dom";
import swal from "sweetalert";
import { connect } from "react-redux";
import { userInputHandler, loginHandler } from "../../redux/actions";

class Login extends React.Component {
  state = {
    usernameLogin: "",
    passwordLogin: "",
  };

  inputHandler = (e, field) => {
    this.setState({ [field]: e.target.value });
  };

  login = () => {
    const { usernameLogin, passwordLogin } = this.state;

    if (usernameLogin == "") {
      return swal("Oops...", "username tidak boleh kosong", "warning");
    }

    if (passwordLogin == "") {
      return swal("Oops...", "password tidak boleh kosong", "warning");
    }

    const userData = {
      username: usernameLogin,
      password: passwordLogin,
    };

    this.props.loginHandler(userData);

    // Axios.get(`${API_URL}/users`, {
    //   params: {
    //     username: usernameLogin,
    //     password: passwordLogin,
    //   },
    // })
    //   .then((res) => {
    //     if (res.data.length == 1) {
    //       this.setState({
    //         isLogged: true,
    //         currentUser: usernameLogin,
    //       });
    //       this.props.userInputHandler(this.state.currentUser);
    //       return swal(
    //         `Halo ${this.state.currentUser}`,
    //         "login berhasil",
    //         "success"
    //       );
    //     } else {
    //       return swal("Oops...", "login gagal", "error");
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
  render() {
    const { username, isLogged } = this.props.user;

    if (!isLogged) {
      return (
        <div
          className="App container p-8"
          style={{ width: "50%", marginTop: "7%" }}
        >
          <h2 className="text-center">Welcome</h2>
          <p>{this.props.user.username}</p>
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
      return <Redirect to={`/profile/${username}`} />;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, { userInputHandler, loginHandler })(
  Login
);
