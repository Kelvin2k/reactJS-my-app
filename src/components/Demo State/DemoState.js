import React, { Component, useState } from "react";

export default class DemoState extends Component {
  state = {
    number: 10,
  };

  render() {
    let number = 1;

    return (
      <div>
        <h2>Demo about State in React</h2>
        {/* <p>Number: {number} </p> */}
        <p>Number: {this.state.number}</p>
        <button
          //   onClick={() => {
          //     number += 1;
          //   }}
          onClick={() => {
            // this.state.number = 20
            // setState method is a default method coming from react component , help re-render value of state
            this.setState({
              number: this.state.number + 1,
            });
          }}
          className="btn btn-success"
        >
          Increase more
        </button>
      </div>
    );
  }
}

//modern version
// export default function DemoStateModernVersion() {
//   const [number, setNumber] = useState(10);

//   return (
//     <div>
//       <h2>Demo about State in React</h2>
//       <p>Number: {number}</p>
//       <button
//         onClick={() => setNumber(number + 1)}
//         className="btn btn-success"
//       >
//         Increase more
//       </button>
//     </div>
//   );
// }
