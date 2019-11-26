import React, { Component } from "react";

export default class ParcelListItem extends Component {
  render() {
    const id = this.props.parcel;
    return (
      <li className="parcels__item parcel">
        <div
          onClick={this.props.getParcelStatus.bind(this, id)}
          className="parcel__number"
          title="Click to get parcel status"
        >
          {this.props.parcel}
        </div>
        <button
          onClick={this.props.removeParcel.bind(this, id)}
          title="Remove parcel"
          className="parcel__remove"
        >
          &#215;
        </button>
      </li>
    );
  }
}
