import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  onReset = () => {
    this.props.onReset();
  };

  onIncrement = (counter) => {
    this.props.onIncrement(counter);
  };

  onDecrement = (counter) => {
    this.props.onDecrement(counter);
  };

  onDelete = (counter) => {
    this.props.onDelete(counter);
  };

  render() {
    return (
      <div>
        <button className="btn btn-primary m-3" onClick={this.onReset}>
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={this.onIncrement}
            onDecrement={this.onDecrement}
            onDelete={this.onDelete}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
