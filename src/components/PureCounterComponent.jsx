import React, { PureComponent } from "react";

export class PureCounterComponent extends PureComponent {
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
    console.log("This is Pure Component");
    return (
      <div>
        <p>Count : {this.state.count}</p>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleToggle}>Set Toggle</button>
      </div>
    );
  }
}

export default PureCounterComponent;
