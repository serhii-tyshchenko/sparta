import React, { Component } from "react";

export default class Results extends Component {
  render() {
    const {
      number,
      citySender,
      cityRecipient,
      payer,
      status
    } = this.props.parcelStatus;
    return (
      <div className="results">
        {this.props.parcelStatus && (
          <div>
            <h2>{number}</h2>
            <div>
              {citySender}-{cityRecipient}
            </div>
            <p>Payer: {payer}</p>
            <p>Status: {status}</p>
          </div>
        )}
      </div>
    );
  }
}
