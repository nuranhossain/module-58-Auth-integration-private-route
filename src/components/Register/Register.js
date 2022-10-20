import React, { useContext } from "react";
import { AuthContext } from "../Contexts/UserContext";

const Register = () => {
  let { createUser } = useContext(AuthContext);
  let { signInWithGoogle } = useContext(AuthContext);

  let handleSubmit = (event) => {
    event.preventDefault();

    let form = event.target;
    let name = form.name.value;
    let email = form.email.value;
    let password = form.password.value;

    createUser(email, password)
      .then((result) => {
        let user = result.user;
      })
      .catch((error) => {
        console.error("Error hoise dada", error);
      });
  };

  let handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        let user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error("Error HOise mama", error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Please Register now!</h1>
              <p className="py-6">
                Your Email will be protected.Use Your Email to login and Enjoy
                the features of our website
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Name</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    name="password"
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button type="" className="btn btn-primary">
                    Register
                  </button>
                </div>
                <div>
                  <button
                    onClick={handleGoogleSignIn}
                    className="btn btn-primary hover:bg-orange-400 hover:border-none"
                  >
                    Google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
