import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-1 m-2">
          <span className="badge badge-secondary">
            {this.props.counter.value}
          </span>
        </div>
        <div className="col">
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => this.props.onIncrement(this.props.counter)}
          >
            +
          </button>
          <button
            className="btn btn-secondary btn-sm m-2"
            onClick={() => this.props.onDecrement(this.props.counter)}
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>

          <button
            className="btn btn-danger btn-sm "
            onClick={() => this.props.onDelete(this.props.counter)}
          >
            DELETE
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
