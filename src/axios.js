import axios from 'axios';

const instance = axios.create({
    // The API (cloud function) URL
    baseURL: `https://us-central1-evyatar-1ea31.cloudfunctions.net/api`

});

export default instance;

// local-url for debugging:
// `http://localhost:5001/evyatar-1ea31/us-central1/api`