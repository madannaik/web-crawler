import axios from "axios";
import { gethtmldata } from "./getHtmlData.js";

const fetchData = async (pageNum) => {
    try {
        const url = `https://stackoverflow.com/questions?page=${pageNum}`;
        const res = await axios.get(url);
        let newUrl = gethtmldata(res.data);
        return newUrl;
    } catch (error) {
        return error;
    }

}
export default fetchData