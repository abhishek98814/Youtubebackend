// require('dotenv').config({path: './env'})

import dotnev from "dotenv"
import connectDB from "./db/index.js";

dotnev.config({
    path:'./env'
})


connectDB()



















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