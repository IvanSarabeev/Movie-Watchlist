import React, { useState } from "react";
import { IMovie } from "./models/model";
import { fetchMovieData } from "./services/apiService";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import MyWatchlist from "./pages/Watchlist";

function App() {
  const [movie, setMovie] = useState<IMovie[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [watchlist, setWatchlist] = useState<IMovie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<IMovie>();

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

  const handleAddToWatchlist = () => {
    const addWatchlist = [...movie];
    setWatchlist(addWatchlist);
  };

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
              // notify={notify}
            />
          }
        />
        <Route
          path="/my-watchlist"
          element={<MyWatchlist watchlist={watchlist} />}
        />
      </Routes>
      {/* <ToastContainer /> */}
    </BrowserRouter>
  );
}

export default App;
