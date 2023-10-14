export const fetchMovieData = async (searchQuery: string) => {
  const searchTitle = searchQuery.replace(" ", "_").toLocaleLowerCase();

  const apiKey: string = "5792fa34";
  const URL: string = `http://www.omdbapi.com/?t=${searchQuery}&s=${searchTitle}&apikey=${apiKey}`;

  try {
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error(`Error fetching the data ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
