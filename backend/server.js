import  express  from "express";
import passport from "passport";
import path from "path";
import "./passport/github.auth.js"
import session from "express-session";
import dotenv from 'dotenv'
import userRoutes from "./routes/user.route.js"
import exploreRoutes from "./routes/explore.route.js"
import authRoutes from "./routes/auth.route.js"
import cors from 'cors'
import connectMongoDB from "./db/connectMongoDB.js";


dotenv.config();
const app = express();

app.use(session({ secret: "keyboard cat", resave: false, saveUninitialized: false }));
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());

app.use(cors());

app.get("/",(req,res)=>{
    res.send("Server is ready");
})
app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);
app.use("/api/explore",exploreRoutes);
app.use(express.static(path.join(__dirname,"/frontend/dist")))

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

app.listen(5000,()=>{
    console.log(`Server is running on port  `);
    connectMongoDB();
})