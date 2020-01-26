import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
const Home = () => {
  const authContext = useContext(AuthContext);
  const { logout, loadUser, user } = authContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  const onLogout = () => {
    logout();
  };

  return (
    <div className="home">
      <p className=" welcomeText">
        {user && user.firstName + " " + user.lastName}
      </p>

      <img className="img-fluid" src="/welcome.jpg" alt="man reading svg" />
      <button
        className="btn btn-primary btnLogOut"
        onClick={onLogout}
        href="#!"
      >
        Log out
      </button>
    </div>
  );
};

export default Home;
