import React, { Component } from "react";
import ParcelListItem from "./ParcelListItem";
export default class ParcelList extends Component {
  render() {
    console.log(this.props.parcels);
    return (
      <div>
        <ul>
          {this.props.parcels.map(item => (
            <ParcelListItem parcel={item} key={item} />
          ))}
        </ul>
      </div>
    );
  }
}
