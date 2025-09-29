// function check empty validation
export const checkEmptyValue = (value, id, error) => {
  //
  if (value == "") {
    error[id] = "Please input value";
    return false;
  } else {
    error[id] = "";
    return true;
  }
};

// function check font number
export const checkPhoneNumberValue = (value, id, error) => {
  // Example regex for Australian phone numbers, adjust as needed
  let regexPhoneNumber = /^(\+61|0)[2|4|3|7|8]{1}[0-9]{8}$/;
  if (regexPhoneNumber.test(value)) {
    // delete notification for user from error object
    error[id] = "";
    return true;
  } else {
    //display user notification in error object
    error[id] = "Please input correct phone number";
    return false;
  }
};

// function check email
export const checkEmailValue = (value, id, error) => {
  let regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regexEmail.test(value)) {
    // delete error notification in error object
    error[id] = "";
    return error[id], true;
  } else {
    //display user notification in error object
    error[id] = "Please input correct email format";
    return error[id], false;
  }
};

// function check string
export const checkIsString = (value, id, error) => {
  const regexString = /^[A-Za-z\s]+$/;
  if (regexString.test(value)) {
    // delete error notification in error object
    error[id] = "";
    return true;
  } else {
    //display user notification in error object
    error[id] = "Please input only letters";
    return false;
  }
};
