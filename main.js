import express from "express";
import dotenv from "dotenv";
import ConnectToDB from "./db/ConnectToDB.js";
import Message from "./models/Message.model.js"
dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.urlencoded({extended: true}));
app.use("/",express.static('public'))
app.set("view engine", "ejs");


app.get("/", async(request,response)=>{
    console.log("GET /");
    request.ip
    try {
        response.render("index")
    } catch (error) {
        response.status(404).render("error/page-not-found")
    }
})
app.get("/about", async(request,response)=>{
    console.log("GET /about");
    response.render("pages/about")
})
app.get("/contact", async(request,response)=>{
    console.log("GET /contact");
    response.render("pages/contact")
})
app.get("/projects", async(request,response)=>{
    console.log("GET /projects");
    response.render("pages/projects")
})
app.get("*", async(request,response)=>{
    response.status(404).render("error/page-not-found");
})
app.post("/form/submit", async(request,response)=>{
    console.log("POST /form/submit");
    const {fullName, email, phoneNumber, message} = request.body;
    try {
        await Message.create({
            fullName,email,phoneNumber,message  
        })
        response.status(200).render("pages/successful", {fullName})
    } catch (error) {
        console.log(error)
        response.status(500).send("internal server error!")
    }
    
})

app.listen(PORT, ()=>{
    console.log(`Listening on http://localhost:${PORT}/`);
    ConnectToDB();
})