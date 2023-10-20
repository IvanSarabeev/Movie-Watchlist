const apiKey = "5792fa34";

const omdBaseUrl = "https://www.omdbapi.com/";

export const fetchMovieData = async (searchQuery: string) => {
  const movieTitle = searchQuery?.replace(" ", "_").toLocaleLowerCase();

  const URL: string = `${omdBaseUrl}?s=${movieTitle}&apikey=${apiKey}&count=10`;

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

  const URL: string = `${omdBaseUrl}?i=${imdbID}&apikey=${apiKey}&count=1`;

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
