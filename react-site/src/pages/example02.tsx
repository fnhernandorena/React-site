import React, { useState } from 'react';

interface Movie {
  title: string;
  year: string;
  poster: string;
  rank: string;
  actors: string;
}

const Example02Page: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const res = await fetch(`https://search.imdbot.workers.dev/?q=${searchTerm}`);
      const { description } = await res.json();

      const movies = description.map((movie: Record<string, string>) => {
        const {
          '#TITLE': title,
          '#YEAR': year,
          '#IMG_POSTER': poster,
          '#RANK': rank,
          '#ACTORS': actors
        } = movie;

        return {
          title,
          year,
          poster,
          rank,
          actors
        } as Movie;
      });

      setMovies(movies);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <div className='w-full'>
      <form className="flex gap-5 mb-10 w-full" onSubmit={submitForm}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Avengers, Matrix, ..."
          className="h-10 block w-1/2 text-sm font-medium rounded-2xl text-gray-900 pl-2"
        />
        <button type="submit" className="bg-gray-700 p-2 rounded-2xl hover:bg-sky-600 duration-300">
          Search
        </button>
      </form>

      {movies.length > 0 ? (
        <ul className="grid grid-cols-2 gap-2 max-w-2xl mx-auto">
          {movies.map((movie, index) => (
            <li key={index} className="mb-4">
              <article>
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="aspect-[11/16] w-full h-auto object-cover rounded-lg"
                />
                <h2 className="text-white flex justify-between items-center">
                  {movie.title}
                  <span className="text-xs text-gray-400">{movie.year}</span>
                </h2>
              </article>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-2xl mb-96">Movies not found.</p>
      )}
    </div>
  );
};

export default Example02Page;
