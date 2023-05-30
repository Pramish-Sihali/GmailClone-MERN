import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD; 

const Connection = () => {
    const DB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@gmail-101.tmltqdy.mongodb.net/?retryWrites=true&w=majority`;
    try {
        mongoose.connect(DB_URI, { useNewUrlParser: true });
        mongoose.set('strictQuery', false);
        console.log('Database connected sucessfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message)
    }
}

export default Connection;


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://Pramish_Sihali:pLP9xhiTOZWeZdkF@gmail-101.tmltqdy.mongodb.net/?retryWrites=true&w=majority";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
    //   serverApi: {
        //     version: ServerApiVersion.v1,
        //     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function Connection() {
    //   try {
        //     // Connect the client to the server	(optional starting in v4.7)
        //     await client.connect();
        //     // Send a ping to confirm a successful connection
        //     await client.db("admin").command({ ping: 1 });
        //     console.log("Pinged your deployment. You successfully connected to MongoDB!");
        //   } finally {
            //     // Ensures that the client will close when you finish/error
            //     await client.close();
            //   }
            // }
            
            
            // export default Connection;