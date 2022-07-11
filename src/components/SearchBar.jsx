import { useNavigate } from "react-router-dom";
import "../public/SearchBar.css";

export default function SearchBar({ changeKeyword }) {
  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const keyword = evt.target.keyword.value;
    changeKeyword(keyword);
    navigate(`/search#${keyword}`);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="" className="textSearch">
        <input type="text" placeholder="Search something..." name="keyword" />
      </label>
    </form>
  );
}
