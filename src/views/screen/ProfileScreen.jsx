import React from "react";
import Axios from "axios";
import { API_URL } from "../../constants/API";

class ProfileScreen extends React.Component {
  state = {
    userList: [],
  };

  getDataHandler() {
    // Axios.get(`${API_URL}/users`, { params: { username: "admin" } })
    //   .then((res) => {
    //     console.log(res);
    //     // this.setState({ userList: res.data });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }

  postDataHandler() {
    Axios.post(`${API_URL}/users`, {
      username: "Bill",
      password: "123",
      role: "admin",
      fullname: "Bill Gates",
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  deleteDataHandler() {
    Axios.delete(`${API_URL}/users/1`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="text-center">
        <h1>This is PROFILE </h1>
        <h2>welcome {this.props.match.params.username}</h2>
        <input
          className="btn btn-success"
          type="button"
          value="get data"
          onClick={this.getDataHandler}
        ></input>
        <input
          className="btn btn-danger"
          type="button"
          value="delete data"
          onClick={this.deleteDataHandler}
        ></input>
        <input
          className="btn btn-secondary"
          type="button"
          value="Post Data"
          onClick={this.postDataHandler}
        ></input>
      </div>
    );
  }
}

export default ProfileScreen;
