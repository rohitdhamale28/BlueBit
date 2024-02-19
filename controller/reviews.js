// this file has all the listing route functions
// this is done to structure our project in mvc format
// MVC : Models-Views-Controller
const Review = require("../models/review.js");
const Course= require("../models/course.js");
const User = require("../models/user.js");


module.exports.addReview=async (req, res) => {
    let { id } = req.params;
    // console.log(id);
    let course = await Course.findById(id);
    let newReview = new Review(req.body.review);
     newReview.author= req.user._id;
    course.reviews.push(newReview);
    console.log(newReview);
    await newReview.save();
    await course.save();
    req.flash("success","New Review added");
    res.redirect(`/courses/${id}`);
    // res.send("Review Saved");
  };


module.exports.deleteReview=async (req, res) => {
    let { id, reviewId } = req.params;
    // console.log(id);
    await Course.findByIdAndUpdate(id, { $pull: { reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash("success","Review Deleted");
    res.redirect(`/courses/${id}`);
  };

