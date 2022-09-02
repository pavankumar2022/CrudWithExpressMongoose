import mongoose from "mongoose";
const databaseConnection = async(DATABASE_URL)=>{
    try{
        const DB_OPTION ={
            dbName:"school"
        };
        await mongoose.connect(DATABASE_URL,DB_OPTION);
        console.log("database connection successfully....");
    }
    catch(err){
        console.log(" Error in connectivity of database...");
    }
}
export default databaseConnection;