import React from "react";

class InputScreen extends React.Component {
  state = {
    username: "",
    email: "",
    counter: 0,
  };

  render() {
    const inputHandler = (e, field) => {
      this.setState({ [field]: e.target.value });
    };

    const wordCount = (e) => {
    this.setState({counter:e.target.value.length})
    }
    return (
      <div>
        <center>
          <h1>INPUT SCREEN</h1>
          <h3>Username : {this.state.username}</h3>
          <h3>Your email : {this.state.email}</h3>
          <input
            onChange={(e) => {
              inputHandler(e, "username");
            }}
            type="text"
            placeholder="masukkan nama"
          ></input>
          <br></br>
          <input
            onChange={(e) => {
              inputHandler(e, "email");
            }}
            type="text"
            placeholder="masukkan email"
          ></input>
          <br></br>
          <textarea
            onChange={(e) => {
              wordCount(e);
            }}
          ></textarea>
          <h5>{this.state.counter}/140</h5>
        </center>
      </div>
    );
  }
}
export default InputScreen;
