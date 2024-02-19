


const mongoose= require("mongoose");
const  initData= require("./startupdata.js");
const Course= require("../models/course.js");
const StartUp= require("../models/startup.js");


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
    await StartUp.deleteMany({});
    // map() function is used to make changes , it actually creates a new array rather than making changes
    // here we are adding a owner to every Course , owner is 'rohit' with object_id '65a10de59f406151d2b192df' from users collection
     initData.data= initData.data.map((obj)=> ({...obj, owner: '65d2e30ddc465b74fd5af6a4'}));
    await StartUp.insertMany(initData.data);
    console.log("data Initiallised");
 }

 initDB();

