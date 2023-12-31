import { MongoClient } from "mongodb";

export function connectToUserDatabase() {
  const uri = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.18jge43.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
  const client = new MongoClient(uri);
  return client;
}

export function connectToItemDatabase() {
  const uri = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.18jge43.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
  const client = new MongoClient(uri);
  return client;
}
