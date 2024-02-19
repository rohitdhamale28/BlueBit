// const { default: mongoose } = require("mongoose");
const mongoose= require("mongoose");
// const Schema= mongoose.Schema;
const Review= require("./review.js");


const courseSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    domain:{
      type:String,
    },
    description:{
      type:String,
    },
    image:{
      type:String,
      // default:"https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      //       set: (v)=> v==="" ? "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
      //        : v,
     },
   price: Number,
  
   country: {
    type:String,
   },
   reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref:"Review",
    }
   ],
   owner:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
   },

});

// this is used to delete all the reviews when the course is deleted
courseSchema.post("findOneAndDelete", async (course) =>{
  if(course){
    await Review.deleteMany({ _id: {$in: course.reviews}});
  }

});

// const Course= mongoose.model("Course",courseSchema);

module.exports= mongoose.model("Course",courseSchema);