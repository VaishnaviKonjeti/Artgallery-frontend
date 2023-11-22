// Login.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            // Now attempt to log in directly
            const response = await axios.post("http://localhost:8000/api/v1/login", {
                username,
                password,
            });

            if (response.status === 200) {
                // Display a success message for login
                toast.success("You are logged in!", {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 2000,
                });

                // Redirect to the home page after successful login
                navigate("/home");
            }
        } catch (error) {
            // Handle login failure, show error message, etc.
            console.error("Login failed:", error.message);
            toast.error("Login failed. Please check your credentials.", {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2000,
            });
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Login</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                        <FaUser className="mr-2" /> Username
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        <FaLock className="mr-2" /> Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    type="button"
                    className="btn btn-primary btn-block mt-3"
                    onClick={handleLogin}
                >
                    Login
                </button>
                <p className="text-center mt-3">
                    Don't have an account? <Link to="/signup">Sign Up</Link>
                </p>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Login;
