import { dumpDataXLXS } from "./files/read.js";
import { scrapData } from "./models/srapDataModel.js";
import fetchData from "./utils/helper.js";


export const fetchServerandStore = async (num) => {
    try {

        const fetchDat = await fetchData(1);
        const newData = await scrapData.create(fetchDat);
        console.log("Page number scrapped", num);
        dumpDataXLXS(fetchDat);
        fetchServerandStore(++num);
    } catch (error) {
        return error;
    }
}
