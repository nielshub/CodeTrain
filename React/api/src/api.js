import React from "react";
import axios from "axios";

export default class Userlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  render() {
    return (
      <ul>
        {this.state.users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    );
  }

  async componentDidMount() {
    const res = await axios.get("http://localhost:4000/users");
    const users = res.data;
    this.setState({ users: users });
  }
}
