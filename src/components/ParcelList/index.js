import React, { Component } from "react";
import ParcelListItem from "./ParcelListItem";
export default class ParcelList extends Component {
  render() {
    return (
      <div className="parcels">
        <ul className="parcels__list">
          {this.props.parcels.map(item => (
            <ParcelListItem
              parcel={item}
              key={item}
              getParcelStatus={this.props.getParcelStatus}
              removeParcel={this.props.removeParcel}
            />
          ))}
        </ul>
      </div>
    );
  }
}
