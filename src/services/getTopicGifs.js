import { api_key } from "../config";

export const getTopicGifs = async (topic) => {
  const limit = 25;
  const rating = "g";
  const offset = 0;
  const query = `http://api.giphy.com/v1/gifs/search?q=${topic}&api_key=${api_key}&limit=${limit}&rating=${rating}&offset=${offset}`;

  console.log(query);
  const data = await fetch(query)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => {
      console.log("error......", err);
    });
  console.log(data);
  return data;
};
