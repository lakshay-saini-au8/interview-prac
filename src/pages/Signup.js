import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
const Signup = () => {
  const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (firstName.trim().length === 0) {
      alert("Enter First Name");
    } else if (lastName.trim().length === 0) {
      alert("Enter last Name");
    } else if (password.length < 8) {
      alert("Min len 8");
    } else {
      const BASE_URL = "http://localhost:3030/signup";
      const formData = {
        firstName,
        lastName,
        email,
        password,
      };
      try {
        const { data } = await axios.post(BASE_URL, formData);
        const { result } = data;
        if (result) {
          history.push("/login");
        }
      } catch (e) {
        alert(e);
      }
    }
  };
  return (
    <div className="container">
      <div className="login-wrapper">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label className="input-lable" htmlFor="firstName">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={firstName}
              className="input-box"
              placeholder="Enter your First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label className="input-lable" htmlFor="lastName">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={lastName}
              className="input-box"
              placeholder="Enter your Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label className="input-lable" htmlFor="email">
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
            <label className="input-lable" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              className="input-box"
              placeholder="Enter your Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="submit">
            <input type="submit" value="Signup" className="submit-button" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
