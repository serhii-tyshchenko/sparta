import React, { Component } from "react";

export default class SearchForm extends Component {
  state = {
    query: ""
  };
  handleChange = e => {
    this.setState({ query: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.submitForm(this.state.query);
    this.setState({ query: "" });
  };
  render() {
    return (
      <div>
        SearchForm
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.query}
            type="text"
            name=""
            onChange={this.handleChange}
          />
          <button>Search</button>
        </form>
      </div>
    );
  }
}
