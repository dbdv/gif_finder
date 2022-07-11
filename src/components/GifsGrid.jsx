import "../public/gifGrid.css";

import GifCard from "./GifCard";
import SearchBar from "./SearchBar";

export default function GifsGrid({ gifs, changeKeyword }) {
  //   console.log(gifs);
  return (
    <div className="mainContainer">
      <SearchBar changeKeyword={changeKeyword} />
      {gifs.map((gif) => (
        <GifCard key={gif.id} gif={gif} />
      ))}
    </div>
  );
}
