import React, { Component } from "react";
import FormUser from "./FormUser";
import TableUser from "./TableUser";

export default class DemoForm extends Component {
  // Create a user management interface to add users to a table.
  // Implementation steps:
  // 1. Define the interface: Create a React component with form inputs for user data (e.g., name, email).
  // 2. Handle data changes: Capture input values, validate user inputs (e.g., email format, required fields), and manage the user list array.
  // 3. Implement UI handling functions:
  //    - A function to capture and validate user input from the form.
  //    - A function to add validated data to the user array.
  //    - An array (state) to store and display user data on the screen.
  //    - A function to update existing user data in the array.
  //    - A function to delete a user from the array.

  state = {
    users: {
      userCode: "",
      userName: "",
      phoneNumber: "",
      email: "",
      jobTitle: "",
      sex: "",
    },
    errors: {
      userCode: "",
      userName: "",
      phoneNumber: "",
      email: "",
      jobTitle: "",
      sex: "",
    },
    arrUser: [],
  };

  handleOnChangValue = (value, id) => {
    // 1. Clone the current users object from state to avoid direct mutation.
    let newUsers = { ...this.state.users };

    // 2. Update the property in newUsers that matches the input's id with the new value.
    //    For example, if id is "userCode", it sets newUsers.userCode = value.
    newUsers[id] = value;

    // 3. Update the state with the modified users object.
    //    This triggers a re-render so the UI reflects the latest input.

    // id = userCode // SE1456
    this.setState({
      users: newUsers,
    });
  };

  render() {
    console.log("this.state.users",this.state.users)
    return (
      <div className="container">
        <h2 className="font-bold text-3xl text-center mb-5">
          Form Exercise in React
        </h2>
        <FormUser
          handleOnChangValue={this.handleOnChangValue}
          users={this.state.users}
          errors={this.state.errors}
        />
        <h2 className="font-bold text-3xl text-center mt-5">User List</h2>
        <TableUser />
      </div>
    );
  }
}
