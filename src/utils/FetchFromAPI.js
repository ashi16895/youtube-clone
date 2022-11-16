import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '7ad0f7d3a4mshdf9b57d4c366063p1b2842jsn6430b2feda51',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  

  export const fetchFromAPI = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
  }


