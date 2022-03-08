
import dotenv from "dotenv"
import mongoose from "mongoose";
import { fetchServerandStore } from "./app.js";

dotenv.config({ path: "./config.env" });

const DATABASE_URI = process.env.DATABASE;

mongoose
    .connect(DATABASE_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connection successful!");
        fetchServerandStore(1);
    })
    .catch((err) => {
        console.log("Cannot connect to database");
        console.log(err);
    });


