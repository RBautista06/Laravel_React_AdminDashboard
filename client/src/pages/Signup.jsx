import { Link } from "react-router-dom";

const Signup = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-signup-form animated fadeInDown">
      <div className="form">
        <form onSubmit={onSubmit}>
          <h1 className="title">Signup for free</h1>
          <input type="text" placeholder="FullName..." />
          <input type="email" placeholder="Email Address..." />
          <input type="password" placeholder="Password..." />
          <input type="password" placeholder="Password Confirmation..." />
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
