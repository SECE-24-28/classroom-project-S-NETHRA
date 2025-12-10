import React, { useState } from "react";
import { FormComponentStyle } from "./forms-component-style";

const FormComponent = () => {
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    college: "",
    passoutYear: "",
    department: "",
    ugPg: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: ""
  });

  const fun1 = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const submitthings = (e) => {
    console.log("Form Details:", details);
  };

  return (
    <FormComponentStyle>
      <h2>Welcome to</h2>
      <h1>
        Aptitude Guru Hem <span className="highlight">LMS</span>
      </h1>

      <form onSubmit={submitthings}>
        
        <div className="row">
          <div className="field">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              onChange={fun1}
              placeholder="Enter first name"
            />
          </div>

          <div className="field">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              onChange={fun1}
              placeholder="Enter last name"
            />
          </div>
        </div>

        
        <div className="row">
          <div className="field">
            <label>Select College</label>
            <select name="college" onChange={fun1}>
              <option value="">Select</option>
              <option value="SECE">Shri Eshwar College Of Engineering</option>
            </select>
          </div>

          <div className="field">
            <label>Passout Year</label>
            <select name="passoutYear" onChange={fun1}>
              <option value="">Select</option>
              <option value="2028">2028</option>
              <option value="2027">2027</option>
              <option value="2026">2026</option>
              <option value="2025">2025</option>
            </select>
          </div>
        </div>

       
        <div className="row">
          <div className="field">
            <label>Department</label>
            <select name="department" onChange={fun1}>
              <option value="">Select</option>
              <option value="CSE">CSE</option>
            </select>
          </div>

          <div className="field">
            <label>UG or PG</label>
            <select name="ugPg" onChange={fun1}>
              <option value="">Select</option>
              <option value="UG">UG</option>
              <option value="PG">PG</option>
            </select>
          </div>
        </div>

       
        <div className="row">
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              onChange={fun1}
              placeholder="Enter email address"
            />
          </div>

          <div className="field">
            <label>Mobile</label>
            <input
              type="text"
              name="mobile"
              onChange={fun1}
              placeholder="Enter mobile number"
            />
          </div>
        </div>

      
        <div className="row">
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={fun1}
              placeholder="Enter password"
            />
          </div>

          <div className="field">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              onChange={fun1}
              placeholder="Enter confirm password"
            />
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>

      <p className="login-text">
        Already have an Account? <a href="#">Log In</a>
      </p>
    </FormComponentStyle>
  );
};

export default FormComponent;


