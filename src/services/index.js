import axios from "axios";

const baseDomain = "https://api.rootnet.in/covid19-in";
const baseURL = `${baseDomain}`;

export default axios.create({
  baseURL
});
const resource = "stats/latest";



// Get Latest Stats
export const getLatestStats = async () => {
    try {
        const {data} = await axios.get(`${baseURL}/${resource}`)
        return data
    } catch (error) {
        console.error(error)
    }
}

export const getStateLatestStats = async () => {
    try {
        const {data} = await axios.get("https://api.rootnet.in/covid19-in/stats/history")
        return data
    } catch (error) {
        console.error(error)
    }
}

// This is used for Graph Extraction
export const getCountryHistory = async () => {
    try {
        const {data} = await axios.get('https://api.rootnet.in/covid19-in/stats/history')
        return data
    } catch (error) {
        console.error(error)
    }
}