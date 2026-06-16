import axios from 'axios';

export function getImagesByQuery(query) {
  return axios.get(
    `https://pixabay.com/api/?key=56333257-5e55ad218ba23a27bfc212fa1&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
  );
}
