const API_KEY = "23052937-32fb9bd6f4b84b12682be3748";
const BASE_URL = `https://pixabay.com/api`;

function fetchFirstLoader({ nextQuery, nextPage }) {
  const url = `${BASE_URL}/?q=${nextQuery}&page=${nextPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  return fetch(url).then((response) => response.json());
}
const apiFirst = { fetchFirstLoader };

export default apiFirst;
