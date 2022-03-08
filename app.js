import { scrapData } from "./models/srapDataModel.js";
import fetchData from "./utils/helper.js";

export const fetchServerandStore = async (num) => {
    try {
        const fetchDat = await fetchData(1);
        const newData = await scrapData.create(fetchDat);
        console.log(num);
        fetchServerandStore(num++);
    } catch (error) {
        return error;
    }
}
