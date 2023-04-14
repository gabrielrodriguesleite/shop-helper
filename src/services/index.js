import axios from 'axios';

export const getItems = (web, category, search, receivedItems) => {
  // const url = 'http://localhost:8000';
  const url = "https://crawler-api.fly.dev/"
  const body = {
    category: category,
    search: search,
    website: web,
  };

  // fix cors when browsers preflight options request automaticaly before a post request:
  const head = {
    headers: {
      "Content-Type": "text/plain"
    }
  }

  axios
    .post(url, body, head)
    .then((r) => r.status == 200 && r.data.items ? receivedItems(r.data.items) : null)
    .catch((e) => console.log(e));
};
