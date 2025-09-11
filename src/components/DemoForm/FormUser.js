import React, { Component } from "react";

export default class FormUser extends Component {
  // userCode, name, phoneNumber,email, job title, sex

  render() {
    // console.log(this.props);
    // Destructuring
    const { errors, users, handleOnChangValue } = this.props;

    return (
      <div>
        <form action>
          <div className="grid grid-cols-2 gap-2">
            <div className="w-full px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="userCode"
              >
                User Code
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="userCode"
                type="text"
                placeholder="Please input user code"
                value={users.userCode}
                onChange={(event) => {
                  const {value,id} = event.target 
                  handleOnChangValue(value, id);
                }}
              />
              <p className="text-red-500 text-xs italic">{errors.userCode}</p>
            </div>
            <div className="w-full px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="userName"
              >
                User Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="userName"
                type="text"
                placeholder="Please input user name"
                value={users.userName}
                onChange={(event) => {
                  const {value,id} = event.target
                  handleOnChangValue(value,id)
                }}
              />
              <p className="text-red-500 text-xs italic">{errors.userName}</p>
            </div>
            <div className="w-full px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="phoneNumber"
              >
                Phone Number
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="phoneNumber"
                type="text"
                placeholder="Jane"
                value={users.phoneNumber}
                onChange={(event) => {
                  const {value,id} = event.target
                  handleOnChangValue(value,id)
                }}
              />
              <p className="text-red-500 text-xs italic">
                {errors.phoneNumber}
              </p>
            </div>
            <div className="w-full px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="email"
                type="text"
                placeholder="Jane"
                value={users.email}
                onChange={(event) => {
                  const {value,id} = event.target
                  handleOnChangValue(value,id)
                }}
              />
              <p className="text-red-500 text-xs italic">{errors.email}</p>
            </div>
            <div className="w-full px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="jobTitle"
              >
                Job Title
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="jobTitle"
                  value={users.jobTitle}
                  onChange={(event) => {
                    const {value,id} = event.target
                    handleOnChangValue(value,id)
                  }}
                >
                  <option value="">Select job title</option>
                  <option>Director</option>
                  <option>Manger</option>
                  <option>Employee</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
              <p className="text-red-500 text-xs italic">{errors.jobTitle}</p>
            </div>
            <div className="w-full px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="sex"
              >
                Sex
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="sex"
                  value={users.sex}
                  onChange={(event) => {
                    const {value,id} = event.target
                    handleOnChangValue(value,id)
                  }}
                >
                  <option value="">Select sex</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Unknown</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
              <p className="text-red-500 text-xs italic">{errors.sex}</p>
            </div>
          </div>
          <div className="text-center mt-5">
            <button
              type="submit"
              className="py-2 px-5 rounded-md bg-black text-white "
            >
              Add user
            </button>
            <button
              type="button"
              className="py-2 px-5 rounded-md bg-yellow-500 text-black ml-4"
            >
              Update user
            </button>
          </div>
        </form>
      </div>
    );
  }
}
