import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import FormWrapper from "../../components/Wrapers/wraper";
import ErrorMessage from "../LandingTwo/Error";
import axios from "../../util/axios";
import { AuthContext } from "../../App";
import "../LandingTwo/Login.css";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const { handleLogin } = useContext(AuthContext);
    const history = useHistory();

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        var userToLogin = {
            email: email,
            password: password,
        };

        try {
            var res = await axios.post("/user/login", userToLogin);
            if (res.status == 200) {
                console.log("yaaay the user has signed! 🟢");
                history.push("/login"); // ?
            }
        } catch (error) {
            console.log("Error happened", error);
        }

        // fetch("http://localhost:4001/user/login", {
        //     method: "POST",
        //     headers: { "content-type": "application/json" },
        //     body: JSON.stringify(userToLogin),
        // })
        //     .then((res) => {
        //         return res.json();
        //     })
        //     .then((err) => {
        //         console.log(err);
        //     });
    };

    return (
        <div className="container">
            <div className="col-12 ">
                <button type="button" className="btn btn-primary " data-bs-toggle="modal" data-bs-target="#exampleModal2">
                    Log in
                </button>

                <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                {/* <h5 className="sign-in" id="exampleModalLabel2">Sign In</h5> */}
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <FormWrapper>
                                    <form
                                        onSubmit={(e) => {
                                            handleSubmitForm(e);
                                        }}
                                    >
                                        <div>
                                            <div>
                                                <img
                                                    className="login_img"
                                                    src="https://images.unsplash.com/photo-1607749111659-e1c8e05f5f24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                                                    alt=""
                                                />
                                            </div>

                                            <h3 className="mb-4">You're back!</h3>
                                            <div className="form-group mb-4">
                                                <label>Email address</label>
                                                <input
                                                    type="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    className="form-control"
                                                    placeholder="Enter email"
                                                />
                                            </div>
                                            <div className="form-group ">
                                                <label>Password</label>
                                                <input
                                                    type="password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    className="form-control"
                                                    placeholder="Enter password"
                                                />
                                            </div>
                                        </div>

                                        <ErrorMessage isVisible={isError} errorMessage={errorMessage} />
                                        <button type="submit" className="btn btn-primary btn-block mt-5">
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
