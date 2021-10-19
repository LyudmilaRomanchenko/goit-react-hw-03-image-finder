const API_KEY = "23052937-32fb9bd6f4b84b12682be3748";
const BASE_URL = `https://pixabay.com/api`;

async function fetchApi(nextQuery, nextPage) {
  const url = `${BASE_URL}/?q=${nextQuery}&page=${nextPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  const response = await fetch(url);
  return await response.json();
}
const apiFirst = { fetchApi };

export default apiFirst;
