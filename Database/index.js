const mongoose=require("mongoose")

async function connectdatabase(){

    const connectDB=await mongoose.connect("mongodb://localhost:27017/Movie")

    try {
        console.log("Connected Sucessfully")
    } catch (error) {
        console.log("Some error")
    }
}

module.exports=connectdatabase