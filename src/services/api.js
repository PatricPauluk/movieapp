import axios from 'axios';

// API: http://www.omdbapi.com/?apikey=42dbe614

// Conexão com a API
const api = axios.create({
  baseURL: "http://www.omdbapi.com/",
})

export default api;