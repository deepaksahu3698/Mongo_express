const express=require("express")

const Movie= require("../Database/Movie_Schema")

const routehandler=express.Router()

async function getmovie(req,res){

    let title=req.query.title

    if(title!=undefined){
        let sort_bytitle=await Movie.find().sort({title:1})
      
        return res.send({
            data:sort_bytitle
        })
        
    }

    let movie=await Movie.find()
    return res.send({
        data:movie
    })
   

}
async function addMovie(req,res){
    let data = req.body;
    console.log(data);
      
       await Movie.insertMany(data);
       return res.send(data);
}



routehandler.post('/add',addMovie)
routehandler.get('/allmovie',getmovie)



module.exports = routehandler;