import axios  from  "axios";
const KEY ="AIzaSyBCn7lMlPut08yIJwYE_P3r4lsWODgMm3k";


export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResult: 5,
    key: KEY,
  },
});