import express from "express";
import {join} from "path";
import databaseConnection from "./mongodb/database.js";
const app = express();
const port = process.env.PORT || "1111";
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";
//database connection
databaseConnection(DATABASE_URL);

//include static file
app.use("/students",express.static(join(process.cwd(),"public")));
app.use("/students/edit",express.static(join(process.cwd(),"public")));

//middleware for url-parse
app.use(express.urlencoded({extended:"false"}));

//include router file
import routes from "./routes/web.js"
app.use("/students",routes)

//include template engine EJS
app.set("view engine","ejs");

 app.listen(port,()=>{
     console.log(`server is listening at http://localhost:${port}`);
 });