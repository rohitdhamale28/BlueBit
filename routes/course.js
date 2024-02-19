// this file contains index , shhow and various which are copied from ro.js 
// this file is just created to sort the the code and make it clean
// the routes are again required in app.js and perform this same task 

// Courses: All the Routes related to courses are in this File

const express = require("express");
const router = express.Router({ mergeParams: true });
// merge params is used because when we try to add new review or post 


// const app= express();
const mongoose = require("mongoose");
const path = require("path");
const Course = require("../models/course.js");
const Review = require("../models/review.js");
const User = require("../models/user.js");

const methodOverride = require("method-override");
const ExpressError = require("../utils/ExpressError.js");
const wrapAsync = require("../utils/wrapAsync.js");
const { courseSchema } = require("../joi.js");
// const {reviewSchema}=require("./joi.js");
const ejsMate = require('ejs-mate');

// this will import the middle ware to check wether we are logged in or not
const { validatecourse, isLoggedIn, isOwner } = require("../middleware.js");





const courseController = require("../controller/courses.js")



// Router.route : this we can make our code more compact by combining the routes which have same path
//                eg. index and create route

// Index and Create route
router.route("/")
  .get(wrapAsync(courseController.index))
  .post(
    isLoggedIn,
    // upload.single("course[image]"),//this will upload the image on cloud
    validatecourse,
    wrapAsync(courseController.createNew));
  

// INDEX route:
// router.get("/", wrapAsync(listingController.index));

// NEW Route:
// write the new route above the show route or node will search new as id in DB
router.get("/new", isLoggedIn, wrapAsync(courseController.createForm));

// CREATE Route:
// router.post("/",isLoggedIn, validatecourse, wrapAsync(courseController.createNew));

// SHOW route:
router.get("/:id", wrapAsync(courseController.show));



// Edit Route:
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(courseController.edit));


// UPDATE Route: 
router.put("/:id", isLoggedIn, isOwner, 
// upload.single("course[image]"),//this will upload the image on cloud
validatecourse, wrapAsync(courseController.update));


// DELETE Route: 
router.delete("/:id", isLoggedIn, isOwner, wrapAsync(courseController.deleteCourse));

module.exports = router;