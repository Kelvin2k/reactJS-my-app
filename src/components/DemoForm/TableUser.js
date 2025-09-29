import React, { Component } from "react";

export default class TableUser extends Component {
  render() {
    const { arrUser, handleDeleteValue, getValueUser } = this.props;
    return (
      <div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  User Code
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone Number
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Job Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Sex
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-400"
                >
                  SE140321
                </th>
                <td className="px-6 py-4">Truong Tan Khai</td>
                <td className="px-6 py-4">0903265695</td>
                <td className="px-6 py-4">khaiga@gmail.com</td>
                <td className="px-6 py-4">Employee</td>
                <td className="px-6 py-4">unknown</td>
                <td className="px-6 py-4 space-x-5">
                  <button>
                    <ion-icon
                      color="warning"
                      size="large"
                      name="create-outline"
                    ></ion-icon>
                  </button>
                  <button>
                    <ion-icon
                      color="danger"
                      size="large"
                      name="trash-outline"
                    ></ion-icon>
                  </button>
                </td>
              </tr>
              {arrUser.map((item, index) => {
                const {
                  userCode,
                  userName,
                  phoneNumber,
                  email,
                  jobTitle,
                  sex,
                } = item;
                return (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-400"
                    >
                      {userCode}
                    </th>
                    <td className="px-6 py-4">{userName}</td>
                    <td className="px-6 py-4">{phoneNumber}</td>
                    <td className="px-6 py-4">{email}</td>
                    <td className="px-6 py-4">{jobTitle}</td>
                    <td className="px-6 py-4">{sex}</td>
                    <td className="px-6 py-4 space-x-5">
                      <button
                        onClick={() => {
                          getValueUser(item);
                        }}
                      >
                        <ion-icon
                          color="warning"
                          size="large"
                          name="create-outline"
                        ></ion-icon>
                      </button>
                      <button
                        onClick={() => {
                          handleDeleteValue(userCode);
                        }}
                      >
                        <ion-icon
                          color="danger"
                          size="large"
                          name="trash-outline"
                        ></ion-icon>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
