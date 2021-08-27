
import axios from "../../util/axios";
import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import FormWrapper from "../../components/Wrapers/wraper";
import ErrorMessage from "../../Pages/Landing/Error";

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
        var userToLogin = {
            email: email,
            password: password,
        };
        try {
            var res = await axios.post("/login", userToLogin);
            if (res.status == 200) {
                console.log("Yaay! The user signed in :", res.data);
                handleLogin(true, res.data.token);
            }
        } catch (error) {
            console.log("Error happened", error.response.data);
            if (error.response.data != null) {
                
                setIsError(true);
                setErrorMessage(error.response.data.message);
            }
            handleLogin(false, null);
        }
    };
    return (

        <div classNameName="col-6">

            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                Sign in
            </button>

            <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="sign-in" id="exampleModalLabel2">Sign In</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">Close</button>
                        </div>
                        <div className="modal-body">

                            <FormWrapper>
                                <form
                                    onSubmit={(e) => {
                                        handleSubmitForm(e);
                                    }}
                                >
                                    <h3>Sign In</h3>
                                    <div className="form-group">
                                        <label>Email address</label>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="form-control"
                                            placeholder="Enter email"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="form-control"
                                            placeholder="Enter password"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox">
                                            <input
                                                type="checkbox"
                                                className="custom-control-input"
                                                id="customCheck1"
                                            />
                                            <label className="custom-control-label" htmlFor="customCheck1">
                                                Remember me
                                            </label>
                                        </div>
                                    </div>
                                    <ErrorMessage isVisible={isError} errorMessage={errorMessage} />
                                    <button type="submit" className="btn btn-primary btn-block">
                                        Submit
                                    </button>
                                    <p className="forgot-password text-right">
                                        Forgot <a href="#">password?</a>
                                    </p>
                                </form>
                            </FormWrapper>


                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}








