import React, { Component } from 'react';
import ParcelListItem from './ParcelListItem';
export default class ParcelList extends Component {
    render() {
        return (
            <div className="parcels">
                <ul className="parcels__list">
                    {this.props.parcels.map(item => (
                        <ParcelListItem
                            parcel={item}
                            key={item.number}
                            getParcelStatus={this.props.getParcelStatus}
                            editParcelTitle={this.props.editParcelTitle}
                            removeParcel={this.props.removeParcel}
                            setParcelColor={this.props.setParcelColor}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}
