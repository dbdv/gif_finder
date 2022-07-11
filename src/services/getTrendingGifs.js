import { api_key } from "../config";

export const getTrendingsGifs = async () => {
  const category = "trending";
  const limit = 25;
  const rating = "g";
  const offset = 25;
  const query = `https://api.giphy.com/v1/gifs/${category}?api_key=${api_key}&limit=${limit}&rating=${rating}&offset=${offset}`;

  const data = await fetch(query)
    .then((res) => res.json())
    .then((data) => data);
  return data;
};
