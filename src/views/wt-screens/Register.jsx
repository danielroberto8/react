import React from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { API_URL } from "../../constants/API";

class Register extends React.Component {
  state = {
    users: "",
    fullName: "",
    usernameRegis: "",
    passwordRegis: "",
    passwordConfirm: "",
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

  checkUser = (arr, username) => {
    for (let i = 0; i < arr.length; i++) {
      if (username == arr[i].username) {
        return false;
      }
    }
    return true;
  };

  checkPassword = (pass, passconfirm) => {
    if (pass == passconfirm) {
      return true;
    }
    return false;
  };

  register = () => {
    const {
      users,
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
      return alert("Form tidak boleh ada yang kosong");
    }
    if (!this.checkUser(users, usernameRegis)) {
      return alert(`Oops...\nUsername ${usernameRegis} sudah ada :(`);
    }
    if (!this.checkPassword(passwordRegis, passwordConfirm)) {
      return alert(`Password tidak cucok`);
    }
    Axios.post(`${API_URL}/users`, {
      username: usernameRegis,
      password: passwordRegis,
      fullname: fullName,
    })
      .then((res) => {
        alert("Pendaftaran berhasil\nSilahkan melakukan login");
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
