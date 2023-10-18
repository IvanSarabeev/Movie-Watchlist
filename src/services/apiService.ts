const apiKey: string = "5792fa34";

export const fetchMovieData = async (searchQuery: string) => {
  const movieTitle = searchQuery?.replace(" ", "_").toLocaleLowerCase();

  const URL: string = `http://www.omdbapi.com/?s=${movieTitle}&apikey=${apiKey}`;

  try {
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error(
        `Status: ${response.status}:statusText: ${response.statusText}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchMovieID = async (searchQuery: string) => {
  const imdbID = searchQuery?.replace(" ", "_").toLocaleLowerCase();

  const URL: string = `http://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`;

  try {
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error(
        `Status: ${response.status}:statusText: ${response.statusText}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
