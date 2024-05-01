import dotenv from "dotenv";
import express from "express"
import {app} from "./app.js"
import connectDB from "./db/index.js";
dotenv.config({
  path: "./.env",
});
// const app = express();

connectDB()
.then(() =>{
  app.listen(process.env.PORT || 8000,() =>{
    console.log(`Server is running at port: ${process.env.PORT}`);
  })
})
.catch((error) =>{
console.log("MongoDB connection failed !!",error)
})



































// import express from "express";~
// const app = express();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("EROOR: ", error);
//       throw error;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.log("ERROR: ", error);
//     throw error;
//   }
// })();
