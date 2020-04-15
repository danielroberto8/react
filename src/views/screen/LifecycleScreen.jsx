import React from "react";

class LifecycleScreen extends React.Component {
  state = {
    name: "",
    time: new Date(),
  };

  componentDidMount() {
    this.timer = setInterval(() => this.triggerClock(), 1000);
  }

  //   componentDidUpdate(){
  //       console.log(this.state.name)
  //   }

  triggerClock = () => {
    this.setState({ time: new Date() });
  };

  render() {
    const { name } = this.state;
    return (
      <div className="text-center">
        <h1>Lifecycle Screen</h1>
        <h3>{this.state.time.toLocaleTimeString()}</h3>
        <h2>Welcome, {name}</h2>
        <input
          className="form-control"
          type="text"
          placeholder="your name"
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
        ></input>
      </div>
    );
  }
}

export default LifecycleScreen;
