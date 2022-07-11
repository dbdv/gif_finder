import { useEffect, useState } from "react";
import { getTopicGifs } from "../services/getTopicGifs";
import GifsGrid from "./GifsGrid";
import Loader from "./Loader";

export default function Trendings({ keyword, changeKeyword }) {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    setGifs([]);
    getTopicGifs(keyword).then((res) => {
      const { data } = res;
      setGifs(data);
    });
  }, [keyword]);

  return gifs.length === 0 ? (
    <Loader />
  ) : (
    <GifsGrid gifs={gifs} changeKeyword={changeKeyword} />
  );
}
