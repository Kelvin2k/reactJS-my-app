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

  // Adds the current user object from state to the user list array (arrUser) in state.
  handleSubmitValue = (event) => {
    // Prevents the default form submission behavior, which would reload the page.
    event.preventDefault();
    // This function is typically called when the form is submitted.
    // It clones the existing user list, appends the new user, and should update state with the new array.
    let newArrUser = [...this.state.arrUser];
    console.log("newArrUser", newArrUser);
    newArrUser.push(this.state.users);
    console.log("newArrUser", newArrUser);
    this.setState({
      arrUser: newArrUser,
    });
  };

  // Delete a user from array
  handleDeleteValue = (userCode) => {
    // To delete a user, you need the unique identifier (e.g., userCode) of the user to remove.
    // Find the index of the user in the array using findIndex. There are two scenarios: either the index exists, or it is not found.
    // Use splice to remove the user from the array that stores user data.
    // Update the state with the new array after deletion.

    let newArrUser = [...this.state.arrUser];
    const index = newArrUser.findIndex((item) => item.userCode === userCode);

    if (index != -1) {
      newArrUser.splice(index, 1);
    }

    this.setState({
      arrUser: newArrUser,
    });
    console.log("newArrUser", newArrUser);
  };

  render() {
    // console.log("this.state.users", this.state.users);
    console.log(this.state.arrUser);
    return (
      <div className="container">
        <h2 className="font-bold text-3xl text-center mb-5">
          Form Exercise in React
        </h2>
        <FormUser
          handleSubmitValue={this.handleSubmitValue}
          handleOnChangValue={this.handleOnChangValue}
          users={this.state.users}
          errors={this.state.errors}
        />
        <h2 className="font-bold text-3xl text-center mt-5">User List</h2>
        <TableUser
          handleDeleteValue={this.handleDeleteValue}
          arrUser={this.state.arrUser}
        />
      </div>
    );
  }
}
