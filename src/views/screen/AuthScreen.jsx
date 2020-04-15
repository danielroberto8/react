import React from "react";

class AuthScreen extends React.Component {
  state = {
    user: [
      {username : "abi", password : "umi"},
      {username : "James", password : "1234"},
    ],
    username: "",
    password: "",
    passwordConfirm: "",
    activeEditIndex: "x"
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
        if (newUser == this.state.user.username) {
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
      arrNewUser.push({username : this.state.username, password : this.state.password});
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
      // this.refs.usernameLogin.value = "";
      // this.refs.passwordLogin.value = "";
      this.setState({ username: "" });
      this.setState({ password: "" });
      this.setState({ passwordConfirm: "" });
    };

    const renderTable = () => {
      return this.state.user.map((val, idx) => {
        
        const btnType = (num) =>{
          if(num%2==0){
            return "btn btn-danger"
          }else{
            return "btn btn-warning"
          }
        }

        const updateUser = (num) =>{
          if(this.state.activeEditIndex==num){
            return(
              <td>
                <input className="form-handler" type="text" placeholder={val.username}></input>
              </td>
            )
          }else{
            return(
              <td>
                {val.username}
              </td>
            )
          }
        }
        
        return (
          <tr>
            <td>{idx + 1}</td>
            {updateUser(idx)}
            <td>
              <input className="btn btn-success" type="button" value="edit" onClick={()=>{this.setState({activeEditIndex : idx})}}></input>
            </td>
            <td>
              <input
                className={btnType(idx)}
                type="button"
                value="Delete"
                onClick={()=>{deleteHandler(idx)}}
              ></input>
            </td>
          </tr>
        );
      });
    };

    const deleteHandler = (idx) =>{
      let temp = [...this.state.user]
      temp.splice(idx,1)
      this.setState({user : [...temp]})
    }

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
          {/* <div>Login</div>
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
          </div> */}
          <table className="table">
          <thead>
            <th>No</th>
            <th>Username</th>
            <th>Action</th>
          </thead>
          <tbody>
            {renderTable()}
          </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default AuthScreen;
