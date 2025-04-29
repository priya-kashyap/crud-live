const mongoose=require('mongoose');
async function dbConn(){
    const conn= await mongoose.connect('mongodb+srv://user:root@cluster0.nrnkwde.mongodb.net/crud-app?retryWrites=true&w=majority&appName=Cluster0');
    if(conn){
        console.log("Database connected successfully!!")
    }
    else{
        console.log("Database connection failure");
    }
}
module.exports=dbConn;