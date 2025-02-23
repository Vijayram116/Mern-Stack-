import "./login.css";
import FI from "./images/f1.jpg";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="container">
      <div className="container1">
        <img src={FI} alt="Finance Logo" className="f1" />
        <div className="text">
          <h1 className="t1">PERSONAL FINANCE MANAGER</h1>
          <h2 className="t2">
            Money Is A Terrible Master But An Excellent Servant
          </h2>
          <div className="form">
            <form className="form1" onSubmit={handleSubmit}>
              <input type="text" placeholder="Enter your username" className="input-field" />
              <input type="password" placeholder="Password" className="input-field" />
              <button type="submit" className="login-button">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;