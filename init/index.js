if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
   // this means we don't have to upload this file in production enviornment
 }


const mongoose= require("mongoose");
const  initData= require("./data.js");
const Course= require("../models/course.js");


// importing the mongodb atlas url
// const dbURL= process.env.ATLASDB_URL; 
// const dbURL= "mongodb+srv://rohitdhamale05:cM79cg.PxW9N7uz@cluster0.82ltj62.mongodb.net/?retryWrites=true&w=majority";


// console.log(dbURL);
main()
  .then(()=>{
    console.log("connection successful")
  })
  .catch((err)=>console.log(err));

// used to form a connection
 async function main(){
 // this is to connect with local 
  await mongoose.connect("mongodb://127.0.0.1:27017/bluebit");
// this is to connect with Mongodb Atlas 
// await mongoose.connect(dbURL);
 }

//  console.log(initData.sampleCourses);
 const initDB= async () => {
    await Course.deleteMany({});
    // map() function is used to make changes , it actually creates a new array rather than making changes
    // here we are adding a owner to every Course , owner is 'rohit' with object_id '65a10de59f406151d2b192df' from users collection
     initData.data= initData.data.map((obj)=> ({...obj, owner: '65d26ca9be86baf723ebd9cb'}));
    await Course.insertMany(initData.data);
    console.log("data Initiallised");
 }

 initDB();

