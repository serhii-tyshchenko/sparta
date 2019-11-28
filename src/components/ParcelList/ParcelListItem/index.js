import React, { Component } from 'react';
import ColorPicker from '../../ColorPicker';
import { GithubPicker } from 'react-color';
class ParcelListItem extends Component {
    state = {
        title: this.props.parcel.title || 'unknown',
        color: this.props.parcel.color || '#fff',
        displayColorPicker: false
    };
    editTitle = e => {
        this.setState({ title: e.target.value });
    };
    handleChange = color => {
        this.setState({ color: Object.values(color.hex).join('') });
    };
    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker });
    };

    handleClose = () => {
        this.setState({ displayColorPicker: false });
    };
    render() {
        const { number, status, date } = this.props.parcel;
        const title = this.state.title;
        const color = this.state.color;
        console.log(color);
        const popover = {
            position: 'absolute',
            zIndex: '2'
        };
        const cover = {
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px'
        };

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
                        <button
                            className="parcel__btn"
                            onClick={this.handleClick}
                        >
                            c
                            {this.state.displayColorPicker ? (
                                <GithubPicker
                                    color={this.state.color}
                                    onChange={this.handleChange}
                                />
                            ) : null}
                        </button>

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
                    <div className="parcel__status">
                        {date} : {status}
                    </div>
                </div>
            </li>
        );
    }
}
export default ParcelListItem;
