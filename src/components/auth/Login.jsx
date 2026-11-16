
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router";

function Login() {

    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [errorMessage, setErrorMessage] = useState('');

    function attemptLogin() {
        axios.post('API_URL', {
            email: email,
            password: password
        })
        .then((response) => {
            setErrorMessage('');
            console.log(response.data.token);
        })
        .catch((error) => {
            if (error.response?.data?.errors) {
                setErrorMessage(
                    Object.values(error.response.data.errors).join(' ')
                );
            } else if (error.response?.data?.message) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage('Failed to login user. Please contact admin');
            }
        });
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-5">

                    <div className="card shadow border-0">
                        <div className="card-body p-4">

                            <h2 className="text-center mb-2">
                                Welcome Back
                            </h2>

                            <p className="text-center text-muted mb-4">
                                Login to your account
                            </p>

                            {errorMessage && (
                                <div className="alert alert-danger">
                                    {errorMessage}
                                </div>
                            )}

                            <div className="mb-3">
                                <label className="form-label">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="form-label">
                                    Password
                                </label>

                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <button
                                className="btn btn-primary w-100"
                                onClick={attemptLogin}
                            >
                                Login
                            </button>

                            <p className="text-center mt-3 mb-0">
                                Don't have an account?
                                <Link to="/register" className="ms-1">
                                    Register
                                </Link>
                            </p>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Login;
