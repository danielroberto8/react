import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logoutHandler } from "../../redux/actions";

class Navbar extends React.Component {
  render() {
    const { username, isLogged } = this.props.user;
    return (
      <div
        className="d-flex justify-content-around align-items-center"
        style={{ height: "80px" }}
      >
        <Link to="/">Home</Link>
        <Link to={`/profile/${username}`}>Profile</Link>
        {isLogged ? (
          <div>
            {username} &nbsp;|&nbsp;
            <a
              href=""
              style={{ color: "red" }}
              onClick={() => {
                this.props.logoutHandler(false);
              }}
            >
              Logout
            </a>
          </div>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // todo: state.todo,
    user: state.user,
  };
};

export default connect(mapStateToProps, { logoutHandler })(Navbar);
