import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import FormWrapper from "../../components/Wrapers/wraper";
import ErrorMessage from "../LandingTwo/Error";
import axios from "../../util/axios";
import { AuthContext } from "../../App";

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
                history.push("/random");
                console.log(res.data.token);

            }
        } catch (error) {
            console.log("Error happened", error);
        }

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
