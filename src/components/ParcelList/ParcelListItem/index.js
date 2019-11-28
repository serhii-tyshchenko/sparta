import React, { Component } from "react";

export default class ParcelListItem extends Component {
  render() {
    const id = this.props.parcel;
    return (
      <li className="parcels__item parcel">
        <div className="parcel__header">
          <h4 className="parcel__title">Untitled</h4>
          <div className="parcel__controls">
            <button title="Edit title" className="parcel__btn parcel__edit">
              edit
            </button>
            <button
              onClick={this.props.removeParcel.bind(this, id)}
              title="Remove parcel"
              className="parcel__btn parcel__remove"
            >
              &#215;
            </button>
          </div>
        </div>
        <div className="parcel__details">
          <div
            className="parcel__number"
            onClick={this.props.getParcelStatus.bind(this, id)}
            title="Click to get parcel status"
          >
            {this.props.parcel}
          </div>
          <div className="parcel__status">Parcel status here</div>
        </div>
      </li>
    );
  }
}
