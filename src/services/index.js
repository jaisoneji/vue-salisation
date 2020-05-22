import axios from "axios";

// You can use your own logic to set your local or production domain
const baseDomain = "https://api.rootnet.in/covid19-in";
// The base URL is empty this time due we are using the jsonplaceholder API
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
        const {data} = await axios.get(`${baseURL}/${resource}/latest`)
        return data
    } catch (error) {
        console.error(error)
    }
}

// This is used for Graph Extraction
export const getCountryHistory = async () => {
    try {
        const {data} = await axios.get('https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise/history')
        return data
    } catch (error) {
        console.error(error)
    }
}