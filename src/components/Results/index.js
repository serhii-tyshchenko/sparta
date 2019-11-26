import React, { Component } from "react";

export default class Results extends Component {
  render() {
    return <div className="results">{this.props.parcelStatus}</div>;
  }
}
