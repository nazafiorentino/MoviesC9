import { Genre, GenreCollection } from "../models/Genre";
import { Movie, MovieCollection } from "../models/Movie";

class DBMovies {
  async addMovie(movie: Movie) {
    await MovieCollection.create(movie)
    
  }
  async getMovies(): Promise<Movie[]> {
    const movies: Movie[] = await MovieCollection.find();
    return movies;
  }

  async addGenre(genre: string) {
    await GenreCollection.create({name : genre})
  }

  async getGenres(): Promise<Genre[]> {
    const genres: Genre[] = await GenreCollection.find();
    return genres;
  }
}

export default DBMovies;
