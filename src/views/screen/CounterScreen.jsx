import React from "react";

// const CounterScreen = () =>{
//     return(
//         <div>
//             <h1>Hello</h1>
//         </div>
//     )
// }

class CounterScreen extends React.Component {
  // render() {
  //   return (
  //     <div>
  //       {this.props.terserahhh.map((val) => {
  //         return <h2>{val}</h2>;
  //       })}
  //     </div>
  //   );
  // }
  state = {
    counter1: 0,
    counter2: 0,
    counter3: 0,
  };

  addAll() {
    this.setState({ counter1: this.state.counter1 + 1 });
    this.setState({ counter2: this.state.counter2 + 1 });
    this.setState({ counter3: this.state.counter3 + 1 });
  }

  render() {
    return (
      <div>
        <div className="row p-8">
          <div className="col-4">
            <center>
              <h1>Counter 1 = {this.state.counter1}</h1>
              <input
                type="button"
                className="btn btn-primary"
                value="+"
                onClick={() =>
                  this.setState({ counter1: this.state.counter1 + 1 })
                }
              />
              <input
                type="button"
                className="btn btn-secondary"
                value="-"
                onClick={() =>
                  this.setState({ counter1: this.state.counter1 - 1 })
                }
              />
            </center>
          </div>
          <div className="col-4">
            <center>
              <h1>Counter 2 = {this.state.counter2}</h1>
              <input
                type="button"
                className="btn btn-primary"
                value="+"
                onClick={() =>
                  this.setState({ counter2: this.state.counter2 + 1 })
                }
              />
              <input
                type="button"
                className="btn btn-secondary"
                value="-"
                onClick={() =>
                  this.setState({ counter2: this.state.counter2 - 1 })
                }
              />
            </center>
          </div>
          <div className="col-4">
            <center>
              <h1>Counter 3 = {this.state.counter3}</h1>
              <input
                type="button"
                className="btn btn-primary"
                value="+"
                onClick={() =>
                  this.setState({ counter3: this.state.counter3 + 1 })
                }
              />
              <input
                type="button"
                className="btn btn-secondary"
                value="-"
                onClick={() =>
                  this.setState({ counter3: this.state.counter3 - 1 })
                }
              />
            </center>
          </div>
        </div>
        <div className="row p-8">
          <div className="col-12">
            <center>
              <h1>All Counter</h1>
              <input
                type="button"
                className="btn btn-primary"
                value="+"
                onClick={() => {
                  this.setState({ counter1: this.state.counter1 + 1 });
                  this.setState({ counter2: this.state.counter2 + 1 });
                  this.setState({ counter3: this.state.counter3 + 1 });
                }}
              />
              <input
                type="button"
                className="btn btn-secondary"
                value="-"
                onClick={() => {
                  this.setState({ counter1: this.state.counter1 - 1 });
                  this.setState({ counter2: this.state.counter2 - 1 });
                  this.setState({ counter3: this.state.counter3 - 1 });
                }}
              />
            </center>
          </div>
        </div>
        <div className="row p-8">
          <div className="col-12">
            <center>
              <h1>Reset All</h1>
              <input
                type="button"
                className="btn btn-primary"
                value="RESET"
                onClick={() => {
                  this.setState({ counter1: 0 });
                  this.setState({ counter2: 0 });
                  this.setState({ counter3: 0 });
                }}
              />
            </center>
          </div>
        </div>
      </div>
    );
  }
}

export default CounterScreen;