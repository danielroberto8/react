import React from "react";
import { Link, Redirect } from "react-router-dom";
import Axios from "axios";
import { API_URL } from "../../constants/API";
import swal from "sweetalert";
import { connect } from "react-redux";
import { userInputHandler } from "../../redux/actions";

class Login extends React.Component {
  state = {
    usernameLogin: "",
    passwordLogin: "",
    currentUser: "",
    isLogged: false,
  };

  inputHandler = (e, field) => {
    this.setState({ [field]: e.target.value });
  };

  login = () => {
    const { usernameLogin, passwordLogin } = this.state;

    Axios.get(`${API_URL}/users`, {
      params: {
        username: usernameLogin,
        password: passwordLogin,
      },
    })
      .then((res) => {
        if (res.data.length == 1) {
          this.setState({
            isLogged: true,
            currentUser: usernameLogin,
          });
          this.props.userInputHandler(this.state.currentUser);
          return swal(
            `Halo ${this.state.currentUser}`,
            "login berhasil",
            "success"
          );
        } else {
          return swal("Oops...", "login gagal", "error");
        }
      })
      .catch((err) => {
        console.log(err);
      });
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

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, { userInputHandler })(Login);
