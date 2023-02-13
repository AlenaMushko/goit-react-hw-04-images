import axios from 'axios';

const KEY = '31999317-3d5c3cea8ef86e3c7a76bbcc7';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchSearchImg = async (searchValue, pageNumber) => {
  const response = await axios.get(
    `?q=${searchValue}&page=${pageNumber}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data.hits;
};
