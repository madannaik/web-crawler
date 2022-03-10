import { dumpDataXLXS } from "./files/read.js";
import { scrapData } from "./models/srapDataModel.js";
import fetchData from "./utils/helper.js";
import { RateLimiterMemory, RateLimiterQueue } from "rate-limiter-flexible"

const limiterFlexible = new RateLimiterMemory({
    points: 5,
    duration: 2,
});
const limiterQueue = new RateLimiterQueue(limiterFlexible, {
    maxQueueSize: 5,
});
export const fetchh = () => {
    for (let i = 0; i < 200; i++) {
        limiterQueue.removeTokens(1)
            .then(() => {
                fetchServerandStore(i);
            })
            .catch(() => {
                console.log('queue is full')
            })
    }
}


const fetchServerandStore = async (num) => {
    try {

        const fetchDat = await fetchData(1);
        const newData = await scrapData.create(fetchDat);
        console.log("Page number scrapped", num);
        dumpDataXLXS(fetchDat);
        // fetchServerandStore(++num);
    } catch (error) {
        return error;
    }
}
