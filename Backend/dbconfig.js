import "dotenv/config";
import { MongoClient } from "mongodb";
const url=process.env.MONGO_URI;
//const url = "mongodb://127.0.0.1:27017/";


//const url =  "mongodb://127.0.0.1:27017/"
const database = "node-Project";
export const collectionName = "to-do";

const client = new MongoClient(url);

export const connection = async () => {
   const connect = await client.connect();
   // Yahan 'node-Project' ki jagah string ya upar wala 'database' variable use hoga
   return connect.db(database); 
}