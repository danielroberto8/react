import React from "react";

// const CounterScreen = () =>{
//     return(
//         <div>
//             <h1>Hello</h1>
//         </div>
//     )
// }

class CounterScreen extends React.Component {
  render() {
    return (
      <div>
        {this.props.terserahhh.map((val) => {
          return <h2>{val}</h2>;
        })}
      </div>
    );
  }
}

export default CounterScreen;
