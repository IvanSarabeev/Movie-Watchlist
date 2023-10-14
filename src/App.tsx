import React, { useState } from "react";
import Home from "./pages/Home";
import { fetchMovieData } from "./services/apiService";
import { IMovie } from "./models/model";

function App() {
  const [movie, setMovie] = useState<IMovie[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async () => {
    try {
      const data = await fetchMovieData(searchQuery);
      setMovie(data.Search || []);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Home
        movie={movie}
        setMovie={setMovie}
        handleSearch={handleSearch}
        setSearchQuery={setSearchQuery}
      />
    </>
  );
}

export default App;
