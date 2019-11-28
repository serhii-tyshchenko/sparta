import React, { Component } from 'react';
import ColorPicker from '../../ColorPicker';
class ParcelListItem extends Component {
    state = {
        title: this.props.parcel.title || 'unknown',
        color: this.props.parcel.color || '#fff'
    };
    editTitle = e => {
        this.setState({ title: e.target.value });
    };
    setColor = e => {
        console.log(e);
    };
    render() {
        const { number, status } = this.props.parcel;
        const title = this.state.title;
        const color = this.state.color;

        return (
            <li
                className="parcels__item parcel"
                style={{ backgroundColor: color }}
            >
                <div className="parcel__header">
                    <input
                        type="text"
                        value={this.state.title}
                        className="parcel__title"
                        onChange={this.editTitle}
                    />
                    <div className="parcel__controls">
                        <button
                            title="Edit title"
                            className="parcel__btn parcel__edit"
                            onClick={this.props.editParcelTitle.bind(
                                this,
                                number,
                                title
                            )}
                        >
                            edit
                        </button>
                        <ColorPicker />
                        <button
                            onClick={this.props.removeParcel.bind(this, number)}
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
                        // onClick={this.props.getParcelStatus.bind(this, number)}
                        title="Click to get parcel status"
                    >
                        {number}
                    </div>
                    <div className="parcel__status">{status}</div>
                </div>
            </li>
        );
    }
}
export default ParcelListItem;
