


const mongoose= require("mongoose");
const  initData= require("./data.js");
const Course= require("../models/course.js");
const StartUp= require("../models/startup.js");




// console.log(dbURL);
main()
  .then(()=>{
    console.log("connection successful")
  })
  .catch((err)=>console.log(err));

// used to form a connection
 async function main(){
 // this is to connect with local 
  await mongoose.connect("mongodb://127.0.0.1:27017/starthub");
// this is to connect with Mongodb Atlas 
// await mongoose.connect(dbURL);
 }

//  console.log(initData.sampleCourses);
 const initDB= async () => {
    await Course.deleteMany({});
    // map() function is used to make changes , it actually creates a new array rather than making changes
    // here we are adding a owner to every Course , owner is 'rohit' with object_id '65a10de59f406151d2b192df' from users collection
     initData.data= initData.data.map((obj)=> ({...obj, owner: '65d2f4d810d2b09b29c6a01d'}));
    await Course.insertMany(initData.data);
    console.log("data Initiallised");
 }

 initDB();

