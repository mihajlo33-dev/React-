import axios from 'axios';

const KEY = 'AIzaSyCUkBmr_azqXZU2_xIWG6Zgx6HyLKLI0kg';


export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY
    }
});
