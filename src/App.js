// Hooks
import { useState, useEffect } from 'react';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Components
import MoviesNavbar from './components/MoviesNavbar';
import MovieItem from './components/MovieItem';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardGroup from 'react-bootstrap/CardGroup';

function App() {

  const [ movies, setMovies ] = useState([]);
  const [ searchValue, setSearchValue ] = useState('');

  const [ moviesExample, setMoviesExample ] = useState([
    {
      "Title": "Silent Hill",
      "Year": "2006",
      "imdbID": "tt0384537",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOWQzNTU3NGUtNDAxMi00ZjFjLTkyYWUtYjgwZDJiMDljZWY4XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    },
    {
      "Title": "Filme 2",
      "Year": "2007",
      "imdbID": "tt0384537",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOWQzNTU3NGUtNDAxMi00ZjFjLTkyYWUtYjgwZDJiMDljZWY4XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    },
    {
      "Title": "Filme 3",
      "Year": "2008",
      "imdbID": "tt0384537",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOWQzNTU3NGUtNDAxMi00ZjFjLTkyYWUtYjgwZDJiMDljZWY4XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    },
    {
      "Title": "Filme 3",
      "Year": "2008",
      "imdbID": "tt0384537",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOWQzNTU3NGUtNDAxMi00ZjFjLTkyYWUtYjgwZDJiMDljZWY4XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    },
    {
      "Title": "Filme 3",
      "Year": "2008",
      "imdbID": "tt0384537",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOWQzNTU3NGUtNDAxMi00ZjFjLTkyYWUtYjgwZDJiMDljZWY4XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    },
    {
      "Title": "Filme 3",
      "Year": "2008",
      "imdbID": "tt0384537",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOWQzNTU3NGUtNDAxMi00ZjFjLTkyYWUtYjgwZDJiMDljZWY4XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    },
    {
      "Title": "Filme 3",
      "Year": "2008",
      "imdbID": "tt0384537",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOWQzNTU3NGUtNDAxMi00ZjFjLTkyYWUtYjgwZDJiMDljZWY4XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    }
  ]);

  return (
    <div className='App'>

      <MoviesNavbar 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        setMovies={setMovies}
      />
      <Container>
        <h1 className='py-3'>Lista de Filmes</h1>
        <Row>
          <CardGroup>
            {movies.map(m => (
              <Col md={2}>
                <MovieItem
                  key={m.imdbID}
                  title={m.Title}
                  year={m.Year}
                  type={m.Type}
                  poster={m.Poster}
                />
              </Col>
            ))}
          </CardGroup>
        </Row>
      </Container>
    </div>
  );
}

export default App;
