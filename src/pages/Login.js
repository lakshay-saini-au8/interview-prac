import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const BASE_URL = `http://localhost:3030/users/${email}/login`;
    const formData = {
      password,
    };
    try {
      if (password.length < 8) {
        alert("Min len 8");
      } else {
        const { data } = await axios.post(BASE_URL, formData);
        const { access_token } = data;
        if (access_token) {
          history.push("/");
        }
      }
    } catch (e) {
      alert(e);
    }
  };
  return (
    <div className="container">
      <div className="login-wrapper">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email" className="input-lable">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              className="input-box"
              placeholder="Enter your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password" className="input-lable">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="input-box"
              value={password}
              placeholder="Enter your Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="submit">
            <input type="submit" value="Login" className="submit-button" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
