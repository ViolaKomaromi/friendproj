import { useState } from "react";
import axios from "axios";
import baseURL from "../../config/baseURL";
import "./Profile.css";

export default function Profile({ user }) {
  const [success, setSuccess] = useState();
  const onSubmit = async (e) => {
    e.preventDefault();
    const userName = e.target.username.value;
    const avatar = e.target.avatar.value;
    const userData = {
      userName,
      avatar,
    };

    try {
      const res = await axios.post(baseURL + "/users/edit", userData);

      setSuccess("profile successfully updated, redirect in 2s");
      setTimeout(() => {
        window.location.replace("/profile");
      }, 2000);

      console.log("RES ==> ", res.data);
    } catch (e) {
      console.log(e);
    }
    console.log("profile ==> ", userData);
  };
  return (
    <div className="container-wrapper Page">
      <h1>My Profile</h1>
      <h4>Hallo {user.userName}</h4>
      {success && (
        <div className="alert alert-success" role="alert">
          {success}
        </div>
      )}
      <img src={user.avatar} alt="" className="ProfileAvatar" />

      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            User Name
          </label>
          <input
            name="username"
            defaultValue={user.userName}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            User Email (Read only)
          </label>
          <input
            value={user.email}
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            readOnly
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Avatar URL
          </label>
          <input
            name="avatar"
            defaultValue={user.avatar}
            type="text"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}







