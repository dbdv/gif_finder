import { useEffect, useState } from "react";
import { getTrendingsGifs } from "../services/getTrendingGifs";
import GifsGrid from "./GifsGrid";
import Loader from "./Loader";

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
  return gifs.length === 0 ? (
    <Loader />
  ) : (
    <GifsGrid gifs={gifs} changeKeyword={changeKeyword} />
  );
}
