import React, { useState } from "react";
import { IMovie, IMovieExtended } from "./models/model";
import { fetchMovieData } from "./services/apiService";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";

function App() {
  const [movie, setMovie] = useState<IMovieExtended[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [watchlist, setWatchlist] = useState<IMovieExtended[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<IMovie>();
  // const [removeMovie, setRemoveMovie] = useState<IMovieExtended[]>([]);

  const handleSearch = async () => {
    try {
      const data = await fetchMovieData(searchQuery);
      if (data.Search && data.Search.length > 0) {
        setMovie(data.Search);
        setSelectedMovie(null || undefined);
      } else {
        setMovie([]);
        setSelectedMovie(null || undefined);
      }
      console.log(data);
    } catch (error: unknown | any) {
      console.log(error);
    }
  };

  const handleAddToWatchlist = (imdbID: string) => {
    const selectedMovie = movie.find((item) => item.imdbID === imdbID);

    if (selectedMovie) {
      setWatchlist((prevWatchlist) => [...prevWatchlist, selectedMovie]);
    } else {
      return selectedMovie;
    }
  };

  // const removeFromCollection = (imdbIDToRemove: string) => {
  //   const removedMovie = watchlist.filter(
  //     (item) => item.imdbID !== imdbIDToRemove
  //   );

  //   setWatchlist(removedMovie);
  // };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              movie={movie}
              setMovie={setMovie}
              handleSearch={handleSearch}
              setSearchQuery={setSearchQuery}
              handleAddToWatchlist={handleAddToWatchlist}
              selectedMovie={selectedMovie}
              setSelectedMovie={setSelectedMovie}
            />
          }
        />
        <Route
          path="/my-watchlist"
          element={
            <Collection
              watchlist={watchlist}
              // removeFromCollection={removeFromCollection}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
