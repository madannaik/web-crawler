import dotenv from "dotenv"
import mongoose from "mongoose";
import { fetchh } from "./app.js";
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
        // fetchServerandStore();
        fetchh();

    })
    .catch((err) => {
        console.log("Cannot connect to database");
        console.log(err);
    });

process.on('SIGINT', function () {
    console.log("Caught interrupt signal");
    clearData().then(res => {
        if (res) {
            process.exit();
        }
    });
});