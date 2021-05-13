import React, { Component } from "react";

class Form extends Component {
  state = {
    text: "",
  };

  onChange = (e) => {
    const value = e.target.value;
    this.setState({ text: value });
  };

  render() {
    return (
      <form>
        <input
          type="text"
          onChange={this.onChange}
          onKeyUp={this.props.filterPerson.bind(this, this.state.text)}
          value={this.state.text}
          placeholder="Buscar por Nombre..."
        />
        <br />
        <button>reiniciar</button>
      </form>
    );
  }
}

export default Form;
