import React, { Component } from "react";
import "../index.css";

export default class Persons extends Component {
  state = {};
  render() {
    return this.props.persons.map((person) => (
      <div className="col" key={person.login.salt}>
        <div className="btn-wrapper">
          <button
            className="deleteBtn"
            onClick={this.props.deletePerson.bind(this, person.login.salt)}
          >
            X
          </button>
          <br />
        </div>
        <div>
          <img className="picture" alt="profile" src={person.picture.large} />
        </div>
        <p className="firstName">{person.name.first}</p>
        <p className="lastName">{person.name.last}</p>
        {/* <p>{person.location.country}</p> */}
        <a href="mailto{person.email}" className="mail">
          {person.email}
        </a>
      </div>
    ));
  }
}
