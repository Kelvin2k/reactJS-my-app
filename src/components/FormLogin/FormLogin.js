import React, { Component } from "react";
import axios from "axios";

export default class FormLogin extends Component {
  state = {
    username: "Alice",
    password: "123",
  };
  handleChangeForm = (e) => {
    // e.target return user object is interacting
    console.log(e.target.value);
    let { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleLogin = () => {
    console.log(this.state);
    // axios({
    //   url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
    //   method: "POST",
    //   data: {
    //     taiKhoan: this.state.username,
    //     matKhau: this.state.password,
    //   },
    //   headers: {
    //     TokenCybersoft:
    //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1NiIsIkhldEhhblN0cmluZyI6IjE4LzA0LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxMzM5ODQwMDAwMCIsIm5iZiI6MTY4MzMwNjAwMCwiZXhwIjoxNzEzNTQ2MDAwfQ.4A7jJib1YUkmnIr-QDcjs_3j1YY0Ft1wPZDfe8qFrqE",
    //   }
    //     .then((res) => {
    //       console.log(res);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     }),
    // });
    axios({
      url: "https://shop.cyberlearn.vn/api/Users/signin",
      method: "POST",
      data: {
        email: this.state.username,
        password: this.state.password,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    this.setState({
      username: "",
      password: "",
    });
  };

  handleLogicver2 = async (params) => {
    try {
      const response = await axios.post(
        "https://shop.cyberlearn.vn/api/Users/signin",
        {
          email: this.state.username,
          password: this.state.password,
        }
        // {
        //   headers: {
        //     cybersoftToken:
        //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1NiIsIkhldEhhblN0cmluZyI6IjE4LzA0LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxMzM5ODQwMDAwMCIsIm5iZiI6MTY4MzMwNjAwMCwiZXhwIjoxNzEzNTQ2MDAwfQ.4A7jJib1YUkmnIr-QDcjs_3j1YY0Ft1wPZDfe8qFrqE",
        //   },
        // }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  eraseState = () => {
    this.setState({
      username: "",
      password: "",
    });
  };

  render() {
    return (
      <div className="w-96 mx-auto">
        <form action="" className="space-y-5">
          <input
            name="username"
            onChange={this.handleChangeForm}
            value={this.state.username}
            type="text"
            className="form-control"
            placeholder="username"
            required
          />
          <input
            name="password"
            onChange={this.handleChangeForm}
            value={this.state.password}
            type="text"
            className="form-control"
          />
          <button
            type="button"
            className="btn-success btn"
            onClick={this.handleLogin}
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}
