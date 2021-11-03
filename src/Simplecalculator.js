import React from "react";

export default class Simplecalculator extends React.Component {
  constructor() {
    super();
    this.state = {
      num1: 0,
      num2: 0,
      sum: 0
    };
  }
  handleChange = (event) => {
    this.setState({
      num1: event.target.value
    });
  };
  handleClick = () => {
    this.setState({
      sum: parseInt(this.state.num1) + parseInt(this.state.num2)
    });
  };
  handleSub = () => {
    this.setState({
      sum: parseInt(this.state.num1) - parseInt(this.state.num2)
    });
  };
  handleMulti = () => {
    this.setState({
      sum: parseInt(this.state.num1) * parseInt(this.state.num2)
    });
  };
  handleDiv = () => {
    this.setState({
      sum: parseInt(this.state.num1) / parseInt(this.state.num2)
    });
  };
  handleMod = () => {
    this.setState({
      sum: parseInt(this.state.num1) % parseInt(this.state.num2)
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.num1}
          onChange={this.handleChange}
        />

        <input
          type="text"
          value={this.setState.num1}
          onChange={(event) => {
            this.setState({
              num2: event.target.value
            });
          }}
        />

        <button onClick={this.handleClick}>Add</button>

        <button onClick={this.handleSub}>Sub</button>

        <button onClick={this.handleMulti}>Multi</button>

        <button onClick={this.handleDiv}>Div</button>

        <button onClick={this.handleMod}>Mod</button>

        <h1>Result={this.state.sum}</h1>
      </div>
    );
  }
}
