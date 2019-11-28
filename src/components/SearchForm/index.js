import React, { Component } from 'react';

export default class SearchForm extends Component {
    state = {
        query: ''
    };
    handleChange = e => {
        this.setState({ query: e.target.value });
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.submitForm(this.state.query);
        this.setState({ query: '' });
    };
    render() {
        return (
            <div className="search">
                <form className="search__form" onSubmit={this.handleSubmit}>
                    <input
                        className="search__input"
                        value={this.state.query}
                        type="text"
                        name=""
                        placeholder="Enter parcel number"
                        onChange={this.handleChange}
                        pattern="^\d{14}"
                        title="14 numbers"
                    />
                    <button className="search__btn">Track</button>
                </form>
            </div>
        );
    }
}
