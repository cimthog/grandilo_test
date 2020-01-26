import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";

const Register = props => {
  const authContext = useContext(AuthContext);

  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    console.log(authContext);
    if (isAuthenticated) {
      props.history.push("/");
    }

    // if (error === "User already exists") {
    //   setAlert(error, "danger");
    //   clearErrors();
    // }
    //eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { firstName, lastName, email, password, confirmPassword } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return alert("Password does not match");
    }

    register({
      firstName,
      lastName,
      email,
      password,
      confirmPassword
    });
  };

  return (
    <div className="container container1">
      <div className="row">
        <div className="col-sm-5 image-div d-none d-xl-block">
          <img
            className="img-fluid left-img"
            src="/pablo-education.png"
            alt="man reading svg"
          />
        </div>
        <div className="col-sm-7">
          <div className="container container1">
            <h3 style={{ fontWeight: "bold" }}>Welcome to BookClub</h3>
            <p style={{ fontSize: "13px", color: "gray" }}>
              Get instant access to the key takeaways from the world's most
              influencial
              <br />
              books ever written that are guaranteed to change your life.
            </p>
            <br />
            <form onSubmit={onSubmit}>
              <div className="form-row">
                <div
                  className="form-group col-md-6"
                  style={{ paddingRight: "20px" }}
                >
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    value={firstName}
                    onChange={onChange}
                    required
                  />
                </div>
                <div
                  className="form-group col-md-6"
                  style={{ paddingRight: "20px" }}
                >
                  <label htmlFor="inputPassword4">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="lastName"
                    value={lastName}
                    onChange={onChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group mt-2" style={{ paddingRight: "20px" }}>
                <label htmlFor="inputAddress">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="form-row mt-4">
                <div
                  className="form-group col-md-6"
                  style={{ paddingRight: "20px" }}
                >
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={password}
                    onChange={onChange}
                    required
                    minLength="6"
                  />
                </div>
                <div
                  className="form-group col-md-6"
                  style={{ paddingRight: "20px" }}
                >
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={onChange}
                    required
                    minLength="6"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="form-check">
                  <input
                    className="form-check-input agree"
                    type="checkbox"
                    onChange={onChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="gridCheck"
                    style={{ fontSize: "13px", color: "gray" }}
                  >
                    Yes, I understand and agree to BookClub's{" "}
                    <a href="#">Terms of Service</a> , including the{" "}
                    <a href="#">User Agreement</a> and{" "}
                    <a href="#">Privacy Policy</a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary col-md-4 btnReg"
                style={{ backgroundColor: "#303fc4" }}
              >
                Create Account
              </button>
              <p className="mt-2">
                Already have an account? <a href="/login">Log in</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
