const mongoose= require("mongoose");
const Schema= mongoose.Schema;

const blogSchema= new Schema({
comment: String,
domain: String,
createdAt: {
    type: Date ,
    default: Date.now(),
},
author:{
    type: Schema.Types.ObjectId,
    ref: "User",
},
});

module.exports= mongoose.model("Blog",blogSchema);