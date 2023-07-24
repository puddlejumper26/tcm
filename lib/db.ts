import { MongoClient } from "mongodb";

export function connectToDatabase() {
  console.log(111111, process.env.mongodb_database);
  const uri = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.18jge43.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
  const client = new MongoClient(uri);
  return client;
}
