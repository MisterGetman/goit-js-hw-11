export default function get(string) {
  const API_KEY = '44691469-d7e9dab06c3e716fb34c6ceb9';
  const params = string =>
    new URLSearchParams({
      key: API_KEY,
      q: string,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    });

  return fetch(`https://pixabay.com/api?${params(string).toString()}`);
}
