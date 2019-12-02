import React, { Component } from 'react';

class SearchForm extends Component {
    state = {
        number: ''
    };
    handleChange = e => {
        this.setState({ number: e.target.value });
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.addParcel(this.state.number);
        this.setState({ number: '' });
    };
    render() {
        return (
            <div className="search">
                <form className="search__form" onSubmit={this.handleSubmit}>
                    <input
                        className="search__input"
                        value={this.state.number}
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
                    <small>
                        try 20450182437180, 20450123167687, 20450120333846
                    </small>
                </div>
            </div>
        );
    }
}

export default SearchForm;
