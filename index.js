const express=require("express")
const Database=require("./Database")
const routehandler=require("./handlers/Movie_handle")

const app=express()

const middlerware=(req,res,next)=>{
    console.log(`requst mad ${req.method}`)
    next()
}
app.use(express.json())
app.use(middlerware)
app.use(routehandler)



Database().then(()=>{
    app.listen(3001,()=>{
        console.log("Server is running at 3001 port")
    })
})