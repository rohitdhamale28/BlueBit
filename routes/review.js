// this file contains review routes which are copied from ro.js 
// this file is just created to sort the the code and make it clean
// the routes are again required in app.js and perform this same task 

// Review: All the Routes related to review are in this File

const express = require("express");
const router = express.Router({mergeParams : true});
// merge params is used because when we try to add new review or post 
// the listing _id is not passed to review.js and _id parametwer remains in the app.js file 


// const app= express();

const wrapAsync = require("../utils/wrapAsync.js");

const {validatereview, isLoggedIn, isReviewAuthor } = require("../middleware.js");

//this file imports all the review route functions
const { addReview, deleteReview } = require("../controller/reviews.js");




  

// Review: 
// POST Route

router.post("/",isLoggedIn, validatereview, wrapAsync(addReview));
  
  
  //Review Delete Route
  router.delete("/:reviewId",isLoggedIn,isReviewAuthor, wrapAsync(deleteReview));

module.exports= router;

  
  