import React from "react";
import axios from "axios";
export default class PersonList extends React.Component {
  state = {
    // with CRA we can use class variables
    persons: [],
  };
  render() {
    return (
      <ul>
        {this.state.persons.map((person) => (
          <li key={person.id}>{person.id} {person.name}</li>
        ))}
      </ul>
    );
  }
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      const persons = res.data;
      this.setState({ persons });
    });
  }
}
