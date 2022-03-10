import { dumpDataXLXS } from "./files/read.js";
import { scrapData } from "./models/srapDataModel.js";
import fetchData from "./utils/helper.js";

// recursive function call for fetching the data 
export const fetchServerandStore = async (num) => {
    try {
        // fetch html data from axios
        const webHTMLData = await fetchData(1);
        // store data in website
        await scrapData.create(webHTMLData);
        console.log("Page number scrapped", num);
        dumpDataXLXS(webHTMLData);
        fetchServerandStore(++num);
    } catch (error) {
        return error;
    }
}
