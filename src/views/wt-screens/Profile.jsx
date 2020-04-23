import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logoutHandler } from "../../redux/actions";

class Profile extends React.Component {
  render() {
    const { id, username, fullname, isLogged } = this.props.user;
    if (isLogged) {
      return (
        <div className="App container p-8">
          <h2 className="text-center">Welcome, {username}</h2>
          <h3>Id : {id}</h3>
          <h3>Full Name : {fullname}</h3>
          <Link to={"/"}>
            <input
              type="button"
              className="btn btn-danger"
              value="Keluar"
              onClick={() => {
                this.props.logoutHandler(false);
              }}
            />
          </Link>
        </div>
      );
    } else {
      return <Redirect to="/login" />;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, { logoutHandler })(Profile);
