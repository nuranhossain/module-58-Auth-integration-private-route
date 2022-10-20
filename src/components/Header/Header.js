import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Contexts/UserContext";

const Header = () => {
  let { user } = useContext(AuthContext);

  let { userSignOut } = useContext(AuthContext);

  let userOut = () => {
    userSignOut().then(() => {
      alert("Logout Successfully");
    });
  };

  return (
    <div>
      <div className="navbar bg-base-100 justify-around shadow-md">
        <a className="btn btn-ghost normal-case text-xl hover:text-white hover:bg-orange-400">
          Firebase
        </a>
        <div>
          <Link
            className="btn btn-ghost normal-case text-xl hover:text-white hover:bg-orange-400"
            to="/home"
          >
            Home
          </Link>

          {user?.email && (
            <Link
              className="btn btn-ghost normal-case text-xl hover:text-white hover:bg-orange-400"
              to="/"
            >
              {user.email}
            </Link>
          )}

          {user?.email ? (
            <button onClick={userOut} className="btn btn-outline btn-secondary">
              SignOut
            </button>
          ) : (
            <div>
              <Link
                className="btn btn-ghost normal-case text-xl hover:text-white hover:bg-orange-400"
                to="/login"
              >
                Login
              </Link>
              <Link
                className="btn btn-ghost normal-case text-xl hover:text-white hover:bg-orange-400"
                to="/register"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
