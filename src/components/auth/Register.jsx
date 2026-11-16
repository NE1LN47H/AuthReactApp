
import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

function Register() {

    let [username, setUsername] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [errorMessage, setErrorMessage] = useState('');

    let navigate = useNavigate();

    function registerUser() {
        let user = {
            user_name: username,
            email: email,
            password: password
        };

        axios.post('API_URL', user)
            .then((response) => {
                setErrorMessage('');
                navigate('/');
            })
            .catch((error) => {
                if (error.response?.data?.errors) {
                    setErrorMessage(
                        Object.values(error.response.data.errors).join(' ')
                    );
                } else {
                    setErrorMessage('Failed to connect to API');
                }
            });
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-5">

                    <div className="card shadow border-0">
                        <div className="card-body p-4">

                            <h2 className="text-center mb-4">
                                Create Account
                            </h2>

                            <p className="text-center text-muted">
                                Register to get started
                            </p>

                            {errorMessage && (
                                <div className="alert alert-danger">
                                    {errorMessage}
                                </div>
                            )}

                            <div className="mb-3">
                                <label className="form-label">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter email"
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
                                    placeholder="Enter password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <button
                                className="btn btn-primary w-100"
                                onClick={registerUser}
                            >
                                Register
                            </button>

                            <p className="text-center mt-3 mb-0">
                                Already have an account?
                                <a href="/" className="ms-1">
                                    Login
                                </a>
                            </p>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Register;
