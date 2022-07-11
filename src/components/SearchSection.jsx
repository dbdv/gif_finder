import { useEffect, useState } from "react";
import { getTopicGifs } from "../services/getTopicGifs";
import GifsGrid from "./GifsGrid";

export default function Trendings({ keyword, changeKeyword }) {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getTopicGifs(keyword).then((res) => {
      const { data } = res;
      setGifs(data);
    });
  }, [keyword]);

  return <GifsGrid gifs={gifs} changeKeyword={changeKeyword} />;
}
