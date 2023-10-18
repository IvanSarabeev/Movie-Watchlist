export interface IMovie {
  imdbID: string;
  Type: string;
  Year: string;
  Title: string;
  Poster: string;
}

export interface IMovieExtended extends IMovie {
  Rated: string;
  Released: string;
  imdbRating: string;
  Runtime: string;
  Director: string;
  Genre: string;
  Actors: string;
  Plot: string;
  Language: string;
  Ratings: Array<{ Value: string; Source: string }>;
}
