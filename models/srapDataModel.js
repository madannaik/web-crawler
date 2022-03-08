import mongoose from 'mongoose';

let schema = mongoose.Schema;
const scrapDataSchema = new schema({
    questionUrl: String,
    voteCount: Number,
    answers: Number,
    referenceCount: Number,
}, { collection: "data" })

export const scrapData = mongoose.model("scrapData", scrapDataSchema);