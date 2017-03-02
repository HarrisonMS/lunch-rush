import React, { Component } from 'react';

export default class NewRestaurant extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    if (!this.state.name) return false;

    this.props.restaurantsRef.push({ name: this.state.name });
    this.setState({ name: '' });
  }

  render() {
    const { name } = this.state;

    return (
      <form
        className="NewRestaurant"
      >
        <input
          type="text"
          value={ name }
          placeholder="Name of Fine Establishment"
          onChange={(event) => this.setState({ name: event.target.value })}
        />
        <button
          onClick={this.handleSubmit}
          disabled={!name}
        >
          Submit
        </button>
      </form>
    );
  }
}
