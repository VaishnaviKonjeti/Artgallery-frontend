// Signup.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaEnvelope, FaMobileAlt } from "react-icons/fa";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const navigate = useNavigate();

    const handleSignup = async () => {
        try {
            // Perform form validation here if needed

            const response = await axios.post("http://localhost:8000/api/v1/signup", {
                username,
                password,
                email,
                number,
            });

            if (response.status === 200) {
                // Display a success message
                toast.success("Signup successful! Please login.", {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

                // Redirect to the login page after successful signup
                navigate("/login");
            }
        } catch (error) {
            // Handle signup failure, show error message, etc.
            console.error("Signup failed:", error.message);
            // Display an error message
            toast.error("Signup failed. Please check your information.", {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Signup</h2>
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
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        <FaEnvelope className="mr-2" /> Email
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="number" className="form-label">
                        <FaMobileAlt className="mr-2" /> Number
                    </label>
                    <input
                        type="tel"
                        className="form-control"
                        id="number"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                    />
                </div>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleSignup}
                >
                    Signup
                </button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Signup;
