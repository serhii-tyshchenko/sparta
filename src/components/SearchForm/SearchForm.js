import React, { Component } from 'react';

class SearchForm extends Component {
    state = {
        query: ''
    };

    handleChange = e => {
        this.setState({ query: e.target.value });
    };

    validateInput = () => this.state.query.length > 14;

    handleSubmit = e => {
        e.preventDefault();
        if (this.validateInput === true) {
            this.props.addParcel(this.state.query);
            this.setState({ query: '' });
        } else {
            alert('Empty query!');
        }
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
                <div style={{ flexBasis: '100%', textAlign: 'center' }}>
                    <small>try 20450182437180</small>
                </div>
            </div>
        );
    }
}

export default SearchForm;
