import React from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { API_URL } from "../../constants/API";
import { Spinner } from "reactstrap";
import swal from "sweetalert";

class Register extends React.Component {
  state = {
    users: "",
    fullName: "",
    usernameRegis: "",
    passwordRegis: "",
    passwordConfirm: "",
    isLoading: false,
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

  checkPassword = (pass, passconfirm) => {
    if (pass == passconfirm) {
      return true;
    }
    return false;
  };

  register = () => {
    const {
      fullName,
      usernameRegis,
      passwordRegis,
      passwordConfirm,
    } = this.state;
    if (
      fullName == "" ||
      usernameRegis == "" ||
      passwordRegis == "" ||
      passwordConfirm == ""
    ) {
      return swal("Oops...", "Form tidak boleh ada yang kosong hyung", "error");
    }
    if (!this.checkPassword(passwordRegis, passwordConfirm)) {
      return swal("Oops...", "Password tidak cucok", "error");
    }

    Axios.get(`${API_URL}/users`, {
      params: {
        username: usernameRegis,
      },
    })
      .then((res) => {
        if (res.data.length == 0) {
          Axios.post(`${API_URL}/users`, {
            username: usernameRegis,
            password: passwordRegis,
            fullname: fullName,
          })
            .then((res) => {
              swal("Yeayyyy", "Pendaftaran berhasil", "success");
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          swal("Oops...", "username sudah dipakai", "error");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div
        className="App container p-8"
        style={{ width: "40%", marginTop: "10%" }}
      >
        <h2>Daftar Baru</h2>
        <label for="fullName">full name</label>
        <input
          type="text"
          className="form-control"
          id="fullName"
          placeholder="Masukkan nama"
          onChange={(e) => {
            this.inputHandler(e, "fullName");
          }}
        />
        <label for="usernameDaftar">username</label>
        <input
          type="text"
          className="form-control"
          id="usernameDaftar"
          placeholder="Masukkan username"
          onChange={(e) => {
            this.inputHandler(e, "usernameRegis");
          }}
        />
        <label for="passwordDaftar">password</label>
        <input
          type="password"
          className="form-control"
          id="passwordDaftar"
          placeholder="Masukkan password"
          onChange={(e) => {
            this.inputHandler(e, "passwordRegis");
          }}
        />
        <label for="passwordRepeat">konfirmasi password</label>
        <input
          type="password"
          className="form-control"
          id="usernameDaftar"
          placeholder="Ulangi password"
          onChange={(e) => {
            this.inputHandler(e, "passwordConfirm");
          }}
        />
        <input
          type="button"
          className="btn btn-primary mt-3"
          value="Daftar"
          onClick={this.register}
        />
        <div>
          Kembali ke halaman <Link to={"/"}>login</Link>
        </div>
      </div>
    );
  }
}

export default Register;
