import axios from 'axios';

const KEY = 'AIzaSyCoXPTwm4PdUPne9u0bUhE8M7RIY9G1Z-A';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY      
    }
});



