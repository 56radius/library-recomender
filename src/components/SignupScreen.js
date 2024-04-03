import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { authConfig } from "../backend/firebase.config";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function SignupScreen() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const userCredential = await createUserWithEmailAndPassword(
        authConfig,
        email,
        password
      );

      const user = userCredential.user;
      console.log("Signing up user ", user.uid);

      setLoading(false);

      Swal.fire({
        icon: "success",
        title: "Signup successful!",
        showConfirmButton: false,
        timer: 1500,
      });

      navigate("/dashboard");
    } catch (error) {
      setLoading(false);

      const errorCode = error.code;
      console.log("Signup error: ", error);

      Swal.fire({
        icon: "error",
        title: "Signup failed!",
        text: error.message,
      });
    }
  };

  return (
    <main>
      <div className="container">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div className="d-flex justify-content-center py-4">
                  <button
                    style={{
                      borderWidth: 0,
                      background: "#fff",
                    }}
                    className="logo d-flex align-items-center w-auto"
                  >
                    <span
                      className="d-none d-lg-block"
                      style={{ color: "green" }}
                    >
                      Register
                    </span>
                  </button>
                </div>
                <form
                  method="post"
                  action=""
                  className="form-horizontal"
                  onSubmit={handleSignup}
                >
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="pt-4 pb-2">
                        <h5 className="card-title text-center pb-0 fs-4">
                          {" "}
                          Sign Up{" "}
                        </h5>
                        <p className="text-center small">
                          Enter your personal details to create an account
                        </p>
                      </div>
                      <div className="row g-3 needs-validation" noValidate>
                        <div className="col-12">
                          <label htmlFor="fullName" className="form-label">
                            Full Name
                          </label>
                          <input
                            type="text"
                            name="fullName"
                            className="form-control"
                            id="fullName"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                          />
                          <div className="invalid-feedback">
                            Please enter your full name!
                          </div>
                        </div>

                        {/* Username */}
                        <div className="col-12">
                          <label htmlFor="userName" className="form-label">
                            Username
                          </label>
                          <input
                            type="text"
                            name="userName"
                            className="form-control"
                            id="userName"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            required
                          />
                          <div className="invalid-feedback">
                            Please enter username!
                          </div>
                        </div>

                        {/* Email */}
                        <div className="col-12">
                          <label htmlFor="email" className="form-label">
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                          <div className="invalid-feedback">
                            Please enter a valid email address!
                          </div>
                        </div>

                        {/* Gender */}
                        <div className="col-12">
                          <label htmlFor="gender" className="form-label">
                            {" "}
                            Gender{" "}
                          </label>
                          <div className="col-sm-10">
                            <select
                              className="form-select"
                              name="gender"
                              value={gender}
                              onChange={(e) => setGender(e.target.value)}
                              id="gender"
                              aria-label="Default select example"
                            >
                              <option value="" disabled>
                                Select Your Gender
                              </option>
                              <option value="male"> Male </option>
                              <option value="female"> Female </option>
                              <option value="other"> Other </option>
                            </select>
                          </div>
                        </div>

                        {/* Phone number */}
                        <div className="col-12">
                          <label htmlFor="phone_no" className="form-label">
                            {" "}
                            Phone Number{" "}
                          </label>
                          <input
                            type="text"
                            name="phone_no"
                            className="form-control"
                            id="phone_no"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                          />
                          <div className="invalid-feedback">
                            Please, enter your number!
                          </div>
                        </div>

                        {/* Password */}
                        <div className="col-12">
                          <label htmlFor="password" className="form-label">
                            Password
                          </label>
                          <input
                            type="password"
                            name="password"
                            id="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                          <div className="invalid-feedback">
                            Please enter your password!
                          </div>
                        </div>

                        <div className="col-12">
                          <button
                            className="btn btn-primary w-100"
                            name="submit"
                            type="submit"
                            disabled={loading}
                          >
                            {loading ? "..." : "Create Account"}
                          </button>
                        </div>
                        <div className="col-12">
                          <p className="small mb-0">
                            Already have an account?{" "}
                            <a onClick={() => navigate("/login")}>Log in</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default SignupScreen;
