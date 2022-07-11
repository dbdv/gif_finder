import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Trendings from "./components/Trendings";
import SearchSection from "./components/SearchSection";
import { useState } from "react";

function App() {
  const [keyword, setKeyword] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        {/*  <Route path="/search">
          <Users />
        </Route> */}
        <Route
          path="/"
          element={<Trendings changeKeyword={setKeyword} keyword={keyword} />}
        />
        <Route
          path="/search"
          element={
            <SearchSection changeKeyword={setKeyword} keyword={keyword} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
