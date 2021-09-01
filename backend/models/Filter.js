const { Schema, model } = require("mongoose");

const FilterSchema = new Schema ({ 

  intrestName: { type: String, required: true},
  intrestScore: { type: Number, required: true},


//   third Schema: user:{objectId}, Intrest:{ObjectId}, 
//    
})









const Filter = model("Filter", FilterSchema);
module.exports = Filter;

