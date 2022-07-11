import { useEffect, useState } from "react";
import { getTrendingsGifs } from "../services/getTrendingGifs";
import GifsGrid from "./GifsGrid";

export default function Trendings({ changeKeyword }) {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getTrendings();
  }, []);

  const getTrendings = async () => {
    const { data } = await getTrendingsGifs();
    setGifs(data);
  };
  // console.log(gifs)
  return <GifsGrid gifs={gifs} changeKeyword={changeKeyword} />;
}
