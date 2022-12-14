import axios from 'axios';

// http://www.omdbapi.com/?apikey=42dbe614

const api = axios.create({
  baseURL: "http://www.omdbapi.com/",
})

export default api;