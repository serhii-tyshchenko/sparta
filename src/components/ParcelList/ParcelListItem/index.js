import React, { Component } from "react";

export default class ParcelListItem extends Component {
  render() {
    return <li>{this.props.parcel}</li>;
  }
}
