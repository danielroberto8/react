import React from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { API_URL } from "../../constants/API";

class Profile extends React.Component {
  state = {
    id: "",
    username: "",
    fullname: "",
  };

  componentDidMount = () => {
    Axios.get(`${API_URL}/users`, {
      params: {
        username: this.props.match.params.user,
      },
    })
      .then((res) => {
        this.setState({ id: res.data[0].id });
        this.setState({ username: res.data[0].username });
        this.setState({ fullname: res.data[0].fullname });
      })
      .catch((err) => {
        alert("Koneksi error");
        console.log(err);
      });
  };

  render() {
    const { id, username, fullname } = this.state;
    return (
      <div className="App container p-8">
        <h2 className="text-center">Welcome, {username}</h2>
        <h3>Id : {id}</h3>
        <h3>Full Name : {fullname}</h3>
        <Link to={"/"}>
          <input type="button" className="btn btn-danger" value="Keluar" />
        </Link>
      </div>
    );
  }
}

export default Profile;
