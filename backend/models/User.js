const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  dateCreated: { type: Date, required: true, default: Date.now },
  fullname: { type: String, required: true },

  username: { type: String, required: true, unique: true },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  birthday: { type: Date, required: true, },
  location: { type: String, required: true },
  avatar: { type: String },
  interests: { type: String },
  gender:{type: String, enum: ["male", "female", "other"]},
  native: {type: Boolean, required: true},
  image: { type: String, required: true },
  // interests: { type: String   }
});

// import { useEffect, useState } from "react";

// function App() {
//   const [gender, setGender] = useState("");

//   useEffect(() => {
//     console.log(gender);
//   }, [gender]);

//   const handleGenderSelect = (event) => {
//     setGender(event.target.value);
//   };

//   return (
//     <form onSubmit={handleFormSubmit}>
//       <label>
//         Gender
//         <select onChange={handleGenderSelect}>
//           <option value="male">Male</option>
//           <option value="female">Female</option>
//           <option value="other">Other</option>
//         </select>
//       </label>
//     </form>
//   );
// }

// export default App;

const User = model("User", UserSchema);
module.exports = User;
