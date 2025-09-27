import { useRef } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../axios/axiosInstance.js";
import { useStateContext } from "../context/ContextProvider";

const Signup = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();

  const { setUser, setToken } = useStateContext();

  const onSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
    };
    try {
      const { data } = await axiosInstance.post("/signup", payload);
      setUser(data.user);
      setToken(data.token);
      console.log("Signup Success", data);
    } catch (err) {
      if (err.response && err.response.status === 422) {
        console.log(err.response.data.errors);
      }
      console.error("Signup error: ", err.response?.data || err.message);
    }
  };

  return (
    <div className="login-signup-form animated fadeInDown">
      <div className="form">
        <form onSubmit={onSubmit}>
          <h1 className="title">Signup for free</h1>
          <input ref={nameRef} type="text" placeholder="FullName..." />
          <input ref={emailRef} type="email" placeholder="Email Address..." />
          <input ref={passwordRef} type="password" placeholder="Password..." />
          <input
            ref={passwordConfirmationRef}
            type="password"
            placeholder="Password Confirmation..."
          />
          <button className="btn btn-block">Signup</button>
          <p className="message">
            Alredy Registered? <Link to="/login">Sign In</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
