// this file has all the listing route functions
// this is done to structure our project in mvc format
// MVC : Models-Views-Controller
const Review = require("../models/review.js");
const Course = require("../models/course.js");
const User = require("../models/user.js");


// INDEX route:
module.exports.index=async (req, res) => {
    const allCourses = await Course.find({});
    res.render("courses/index.ejs", { allCourses });
};

// NEW Route:
// write the new route above the show route or node will search new as id in DB
module.exports.createForm= async (req, res) => {
    res.render("courses/createNew.ejs");
};

// CREATE Route:
module.exports.createNew= async (req, res) => {


    const newCourse = new Course(req.body.course);
    newCourse.owner=req.user._id;
    // newCourse.image={url,filename};
    await newCourse.save();
    req.flash("success","New Course added");
    res.redirect("/courses");
};

// SHOW route:
module.exports.show=async (req, res) => {
    let { id } = req.params;
    // console.log(id);
    // here we are using nested populate to get author info from or along with reviews
    const showCourses = await Course.findById(id).populate({path:"reviews",populate:{path:"author"} }).populate("owner");
    // console.log(showCourses);
    if(!showCourses){
    req.flash("error"," Course Not found");
     res.redirect("/courses");
    }
    res.render("courses/show.ejs", { showCourses });
};

// Edit Route:
module.exports.edit=async (req, res) => {
    let { id } = req.params;
    // console.log(id);
    const editCourses = await Course.findById(id);
    if(!editCourses){
        req.flash("error"," Course Not found");
         res.redirect("/courses");
        }
    res.render("courses/edit.ejs", { editCourses });
};

// UPDATE Route: 
module.exports.update=async (req, res) => {
    let { id } = req.params;
    // console.log(req.body.listing);

   
    let course =await Course.findByIdAndUpdate(id, req.body.course);
//    if(typeof req.file !== "undefined"){
    let url= req.file.path;
    // let filename= req.file.filename;
    // course.image={url};
   await course.save();
//    }
   
    req.flash("success"," Course Upadated");
    res.redirect(`/courses/${id}`);
};

// DELETE Route: 
module.exports.deleteCourse=async (req, res) => {
    let { id } = req.params;
    console.log(id);
    await Course.findByIdAndDelete(id);
    req.flash("success"," Course Deleted");
    res.redirect("/courses");
};