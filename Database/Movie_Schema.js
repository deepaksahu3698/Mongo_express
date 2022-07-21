const mongoose=require("mongoose")

const movie_list_schema=mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    img:{
        type:String
    }
})

const Movie=mongoose.model("Movie",movie_list_schema)

module.exports=Movie