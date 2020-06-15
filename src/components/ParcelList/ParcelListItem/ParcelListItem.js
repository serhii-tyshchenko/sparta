import React, { Component } from 'react';
import { GithubPicker } from 'react-color';
export class ParcelListItem extends Component {
    state = {
        title: this.props.parcel.title || 'unknown',
        color: this.props.parcel.color || '#fff',
        displayColorPicker: false
    };
    handleTitleChange = (e) => {
        this.setState({ title: e.target.value });
    };
    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.props.editParcel(
                this.props.parcel.number,
                'title',
                e.target.value
            );
        }
    };
    handleColorChange = (color) => {
        const newColor = Object.values(color.hex).join('');
        const number = this.props.parcel.number;
        this.setState({ color: newColor });
        this.props.editParcel(number, 'color', newColor);
    };
    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker });
    };

    handleClose = () => {
        this.setState({ displayColorPicker: false });
    };
    render() {
        const {
            number,
            status,
            date,
            cityRecipient,
            citySender
        } = this.props.parcel;
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
                        onChange={this.handleTitleChange}
                        onKeyDown={this.handleKeyDown}
                        onBlur={this.props.editParcel.bind(
                            this,
                            number,
                            'title',
                            title
                        )}
                    />
                    <div className="parcel__controls">
                        <button
                            className="parcel__btn icon-color-adjust"
                            onClick={this.handleClick}
                            title="Change parcel color"
                        >
                            {this.state.displayColorPicker ? (
                                <GithubPicker
                                    color={this.state.color}
                                    onChange={this.handleColorChange}
                                    triangle="top-right"
                                />
                            ) : null}
                        </button>
                        <button
                            onClick={this.props.getParcelStatus.bind(
                                this,
                                number
                            )}
                            title="Update parcel status"
                            className="parcel__btn parcel__update icon-arrows-cw"
                        ></button>
                        <button
                            onClick={this.props.removeParcel.bind(this, number)}
                            title="Remove parcel"
                            className="parcel__btn parcel__remove icon-trash-empty"
                        ></button>
                    </div>
                </div>
                <div className="parcel__details">
                    <h3 className="parcel__number">{number}</h3>
                    {citySender ? (
                        <div className="parcel__route icon-location">
                            {citySender} - {cityRecipient}
                        </div>
                    ) : null}
                    <div className="parcel__date icon-calendar">{date}</div>
                    <div className="parcel__status">{status}</div>
                </div>
            </li>
        );
    }
}
