const optionsGET = {
  method: "GET",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
};

export const fetchData = async () => {
  // const apiKey: string | undefined = process.env.REACT_APP_API_KEY;
  // const url: string = `http://www.omdbapi.com/?t=Blade+Runner`;
  const apiKey: string = "5792fa34";
  const url: string = `www.omdbapi.com/?i=tt3896198&apikey=${apiKey}`;

  try {
    const response = await fetch(url, optionsGET);

    if (!response.ok) {
      throw new Error(`Error fetching the data ${response.status}`);
    }

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
