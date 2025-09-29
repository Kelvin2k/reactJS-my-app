import React, { Component } from "react";
import FormUser from "./FormUser";
import TableUser from "./TableUser";
import {
  checkEmailValue,
  checkEmptyValue,
  checkIsString,
  checkPhoneNumberValue,
} from "../../util/validation";

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
    initialUserState: {
      userCode: "",
      userName: "",
      phoneNumber: "",
      email: "",
      jobTitle: "",
      sex: "",
    },
    arrUser: [],
    isUserCodeDisabled: false
  };

  handleOnChangValue = (value, id, valueAttribute) => {
    // validation data
    // 1. Create a newError from state
    // 2. Use validation function to check data and insert error notification into newError
    // 3. use setState method to update to state
    let newError = { ...this.state.errors };
    // 1. Clone the current users object from state to avoid direct mutation.
    // let newError = { ...this.state.errors };
    let newUsers = { ...this.state.users };

    // 2. Update the property in newUsers that matches the input's id with the new value.
    //    For example, if id is "userCode", it sets newUsers.userCode = value.
    newUsers[id] = value;

    //Check data: check empty value
    let checkEmpty = checkEmptyValue(value, id, newError);
    // If checkEmpty returns true (no empty field error), proceed to check other validations.
    if (checkEmpty) {
      // check phone number input
      if (id === "phoneNumber") {
        checkPhoneNumberValue(value, id, newError);
      }
      // check input email
      if (id === "email") {
        checkEmailValue(value, id, newError);
      }
      if (valueAttribute === "string") {
        checkIsString(value, id, newError);
      }
    }

    // 3. Update the state with the modified users object.
    //    This triggers a re-render so the UI reflects the latest input.

    // id = userCode // SE1456
    this.setState({
      users: newUsers,
      errors: newError,
    });
  };

  // Adds the current user object from state to the user list array (arrUser) in state.
  handleSubmitValue = (event) => {
    // Prevents the default form submission behavior, which would reload the page.
    event.preventDefault();

    // Before adding the user to the array, validate all fields:
    // 1. Loop through the errors object to check if any field contains an error message (i.e., is not an empty string). Also check if any required user field is empty (to prevent adding incomplete users). If there are no errors and all required fields are filled, add the user to the array. If there are errors or missing fields, do not add the user and optionally show a notification or error message to the user. ==> for in
    // Notes: For in loop through object return key / value, For of loop through array return value
    let isValid = true;
    for (let key in this.state.errors) {
      if (this.state.errors[key] != "") {
        isValid = false;
      }
    }

    // Check if usercode is already existed in the array; there will be no data added in and there will be an error notification shown.
    // Firstly, get data stored in value attribute of state and its attribute called usercode, representing the data that user input on UI.
    // Use find function in array to check if there is any element in the array that has the same userCode (userCode === item.userCode ===> undefined, so there is no element carrying that id ===> has element, id has already existed).

    let checkUser = this.state.arrUser.find((item) => {
      return item.userCode === this.state.users.userCode;
    });
    if (!checkUser) {
      // no user data that has the same id
    } else {
      isValid = false;
      // user data exsited, so id is duplicate
      let newErrors = { ...this.state.errors };
      newErrors.userCode = "User code is duplicate";
      this.setState({
        errors: newErrors,
      });
    }

    for (let key in this.state.users) {
      if (this.state.users[key] == "") {
        isValid = false;
      }
    }

    if (isValid) {
      // 2. Use another loop to check the values of the user object to ensure all required fields have been filled in.
      //    If any field is empty, display a notification to the user and prevent adding the user to the list.
      //    (You can use a for...in loop to iterate through the object's keys and check their values.)

      // This function is typically called when the form is submitted.
      // It clones the existing user list, appends the new user, and should update state with the new array.
      let newArrUser = [...this.state.arrUser];
      console.log("newArrUser", newArrUser);
      newArrUser.push(this.state.users);
      console.log("newArrUser", newArrUser);
      this.setState({
        arrUser: newArrUser,
        // users: { ...this.state.initialUserState },
      });
    }
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

  getValueUser = (user) => {
    // Firstly recieving userCode of choosen element that user wants to update
    // after recieving userCode, that user inforamtion will be rendered on UI by using values attribute in state
    console.log("user", user);
    this.setState({
      users: { ...user },
      isUserCodeDisabled: true,
    });
  };

  //Update user information
  handleUpdateValue = () => {
    // check errors before update, state.errors, state.value
    // get id of element showing on screen and implement finiding this element in the array
    // ==> if it is found, this element will be updated
    console.log("helloupdate")
    let isValid = true;
    for (let key in this.state.errors) {
      if (this.state.errors[key] !== "") {
        isValid = false;
      }
    }
    debugger
    if (isValid) {
      console.log("hello valid")
      let newArrUser = [...this.state.arrUser];
      let index = newArrUser.findIndex((item) => {
        return item.userCode === this.state.users.userCode;
      });
      console.log("index",index)
      if (index !== -1) {
        console.log("hello update")
        newArrUser[index] = { ...this.state.users };
        this.setState(
          {
            arrUser: newArrUser,
            users: { ...this.state.initialUserState },
            isUserCodeDisabled: false,
          },
          () => {
            console.log("arrUser", this.state.arrUser); // log đúng giá trị mới
          }
        );
      }
    }
  };

  render() {
    // console.log("this.state.users", this.state.users);
    console.log(this.state.errors);

    console.log(this.state.arrUser);
    return (
      <div className="container">
        <h2 className="font-bold text-3xl text-center mb-5">
          Form Exercise in React
        </h2>
        <FormUser
          isUserCodeDisabled = {this.state.isUserCodeDisabled}
          handleUpdateValue={this.handleUpdateValue}
          handleSubmitValue={this.handleSubmitValue}
          handleOnChangValue={this.handleOnChangValue}
          users={this.state.users}
          errors={this.state.errors}
        />
        <h2 className="font-bold text-3xl text-center mt-5">User List</h2>
        <TableUser
          getValueUser={this.getValueUser}
          handleDeleteValue={this.handleDeleteValue}
          arrUser={this.state.arrUser}
        />
      </div>
    );
  }
}
