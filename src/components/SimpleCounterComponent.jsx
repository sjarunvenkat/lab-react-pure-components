import React, { Component } from "react";

export class SimpleCounterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      toggle: false,
    };
  }

  handleIncrement = () => {
    if (this.state.toggle) {
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    }
  };

  handleToggle = () => {
    this.setState((prevState) => ({ toggle: !prevState.toggle }));
  };

  render() {
    console.log("This is Simple Component");
    return (
      <div>
        <p>Count : {this.state.count}</p>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleToggle}>Set Toggle</button>
      </div>
    );
  }
}

export default SimpleCounterComponent;
