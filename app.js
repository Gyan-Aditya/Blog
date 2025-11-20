require('dotenv').config();

const express=require("express");
const path=require("path");
const userRoute=require("./routes/user");
const blogRoute=require("./routes/blog");
const {checkForAuthenticationCookie}=require("./middleware/auth");
const mongoose=require("mongoose");
const cookieParser=require("cookie-parser");
const Blog=require("./models/blogs");

const app=express();
const PORT=process.env.PORT || 8000;

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("MongoDb connected");
}).catch(()=>{
    console.log("Database not connected");
});

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));
app.use(express.static(path.resolve("./public")));

app.get('/',async(req,res)=>{
    const allBlogs=await Blog.find({});
    return res.render("home2",{
        user: req.user,
        blogs: allBlogs,
    });
});

app.use('/user',userRoute);
app.use('/blog',blogRoute);




app.listen(PORT,()=>{console.log(`Server started at PORT:${PORT}`)});