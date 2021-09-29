import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import FormWrapper from "../../components/Wrappers/wrapper";
import ErrorMessage from "../LandingTwo/Error";
import axios from "../../util/axios";
import { AuthContext } from "../../App";
import "./login.css";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isError, setIsError] = useState(false);

    const [errorMessage, setErrorMessage] = useState("");
    const { handleLogin } = useContext(AuthContext);
    const history = useHistory();

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        let userToLogin = {
            email: email,
            password: password,
        };

        try {
            var res = await axios.post("/user/login", userToLogin);
            if (res.status == 200) {
                console.log("yaaay the user has signed! 🟢");
                handleLogin(true, res.data.token);
                history.push("/");
                console.log(res.data.token);
            }
        } catch (error) {
            console.log("Error happened", error);
        }
    };

    return (
        <div className="container">
            <div className="col-12 ">
                <button type="button" className="btn landing-btn landing-btn-alt " data-bs-toggle="modal" data-bs-target="#exampleModal2">
                    Log in
                </button>

                <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
                    <div className="modal-dialog log-dialog modal-dialog-centered mx-auto">
                        <div className="modal-content modal-box-style">
                            <div className="modal-body">
                                <div>
                                    <img
                                        className="login-img"
                                        src="https://images.unsplash.com/photo-1588160049682-9761fcf4d70a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGZyaWVuZHN8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                        // src="https://images.unsplash.com/photo-1607749111659-e1c8e05f5f24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJpZW5kc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                        alt=""
                                    />
                                </div>
                                <FormWrapper>
                                    <div className="btn-close-section">
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>

                                    <form
                                        onSubmit={(e) => {
                                            handleSubmitForm(e);
                                        }}
                                    >
                                        <h3 className="mb-4 login-modal-title">You're back!</h3>
                                        <div className="form-group mb-4">
                                            {/* <label>Email address</label> */}
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="form-control"
                                                placeholder="Enter email"
                                            />
                                        </div>
                                        <div className="form-group ">
                                            {/* <label>Password</label> */}
                                            <input
                                                type="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                className="form-control"
                                                placeholder="Enter password"
                                            />
                                        </div>

                                        <ErrorMessage isVisible={isError} errorMessage={errorMessage} />
                                        <button type="submit" className="btn btn-primary btn-block mt-5 login-btn">
                                            Log In
                                        </button>
                                    </form>
                                </FormWrapper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
