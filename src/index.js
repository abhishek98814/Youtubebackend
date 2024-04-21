// require('dotenv').config({path: './env'})

import dotnev from "dotenv"
import connectDB from "./db/index.js";

dotnev.config({
    path:'./env'
})


connectDB()
.then(() =>{
    app.listen(process.env.PORT || 8000, () =>{
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) =>{
    console.log("Mongo Db is connection failed!!", err);
})



















// import express from "express"
// ;(async () => {
//     try{
// await mongoose.connect(`${process.env.
//     MONGODB_URI}/${DB_NAME}`)
//     app.on("error", (error) =>{
//         log("Errr", error)
//     })

//     app.listen(process.env.PORT, () =>{
//         console.log(`App is listening in port ${PORT}`);
//     })
//     }catch(error){
//         console.log("Eroor", error);
//         throw err
//     }
// })()