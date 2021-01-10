import React, { useState, useEffect } from "react";
import "../../styles/login.scss";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../store/actions/auth";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [state, setState] = useState({ email: "", password: "" });

  useEffect(() => {
    if (isLoggedIn) {
      history.push("/dashboard/");
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(state));
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h3 className="text-center mb-4">Hello! Welcome Back.</h3>
        <div className="form-group">
          <label>Email address</label>
          <input
            name="email"
            type="email"
            value={state.email}
            className="form-control"
            placeholder="youremail@gmail.com"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            value={state.password}
            className="form-control"
            placeholder="********"
            required
            onChange={(e) => handleChange(e)}
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            id="show-password-icon"
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </span>
        </div>
        <div>
          <button
            onClick={(e) => handleSubmit(e)}
            type="submit"
            className="form-control btn-sm primary-btn"
          >
            Log in
          </button>
        </div>
      </form>
    </div>
  );
}
