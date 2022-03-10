import dotenv from "dotenv"
import mongoose from "mongoose";
import { fetchServerandStore } from "./app.js";
import { clearData } from "./files/clear.js";
import { prepareHeader } from "./utils/prepareHeader.js";


dotenv.config({ path: "./config.env" });

const DATABASE_URI = process.env.DATABASE;

mongoose
    .connect(DATABASE_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connection successful!");
        prepareHeader();
        fetchServerandStore();

    })
    .catch((err) => {
        console.log("Cannot connect to database");
        console.log(err);
    });

process.on('SIGINT', function () {
    console.log("Check the file for data in dist folder");
    process.exit();
});