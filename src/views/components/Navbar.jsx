import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Navbar extends React.Component {
  render() {
    return (
      <div
        className="d-flex justify-content-around align-items-center"
        style={{ height: "80px" }}
      >
        <Link to="/">Home</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/login">Login</Link>
        {this.props.username}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // todo: state.todo,
    username: state.user.username,
  };
};

export default connect(mapStateToProps)(Navbar);
