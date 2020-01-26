import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";

const Login = props => {
  const authContext = useContext(AuthContext);

  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    console.log(isAuthenticated);
    if (isAuthenticated) {
      props.history.push("/");
    }

    // if (error === "Invalid credientials") {
    //   setAlert(error, "danger");
    //   clearErrors();
    // }
    //eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const { email, password } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if ((email === "") | (password === "")) {
      //setAlert("Please fill all fields", "danger");
    } else {
      login({
        email,
        password
      });
    }
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
              <p className="h4 mb-4 text-center">Sign in</p>

              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                name="email"
                className="form-control mb-4"
                value={email}
                onChange={onChange}
                required
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className="form-control mb-4"
                value={password}
                onChange={onChange}
                required
              />

              <div className="d-flex justify-content-around">
                <div>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="defaultLoginFormRemember"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="defaultLoginFormRemember"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <div>
                  <a href="/forgotpassword">Forgot password?</a>
                </div>
              </div>

              <input
                type="submit"
                value="Login"
                className="btn btn-primary btn-block mt-4"
              />
              <p className="mt-2">
                Not a member? <a href="/register">Register</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
