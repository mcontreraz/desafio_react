import React, { Fragment } from "react";
import axios from "axios";

// componentes

import Form from "./components/Form";
import Persons from "./components/Persons";

export default class App extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=15`).then((res) => {
      const persons = res.data.results;
      this.setState({ persons });
    });
  }

  deletePerson = (id) => {
    const xPerson = this.state.persons.filter(
      (person) => person.login.salt !== id
    );
    this.setState({ persons: xPerson });
    console.log("ejecutando delete");
  };

  filterPerson = (e) => {
    if (e.value === "") {
      console.log("vacio");
    } else {
      const fName = this.state.persons.filter((n) =>
        n.name.first.toLowerCase().includes(e.toLowerCase())
      );
      this.setState({ persons: fName });
      console.log(this.state.persons);
    }
  };

  render() {
    return (
      <Fragment>
        <div className="input-wrapper">
          <Form filterPerson={this.filterPerson} />
        </div>
        <div className="flexbox">
          <Persons
            persons={this.state.persons}
            deletePerson={this.deletePerson}
          />
        </div>
      </Fragment>
    );
  }
}
