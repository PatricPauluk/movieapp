// Hooks
import { useState } from 'react';

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

  const [ movies, setMovies ] = useState([]); // recebe dados dos filmes
  const [ searchValue, setSearchValue ] = useState(''); // busca dos filmes
  const [ totalResults, setTotalResults ] = useState(0); // quantidade de resultados

  return (
    <div className='App'>
      {/* MoviesNavbar tem o layout da navbar e a função de receber/exibir dados na busca */}
      <MoviesNavbar 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        setMovies={setMovies}
        setTotalResults={setTotalResults}
      />

      {/* Filmes listados dentro de um container conforme a busca do usuário */}
      <Container>
        <h1 className='py-3'>Lista</h1>
        {/* Se não tiver filmes para exibir, deixa uma mensgem para o usuário */}
        {
          movies.length === 0 ? <h5>Faça sua busca.</h5> :
          movies.length > 1 ? <p>{totalResults} resultados</p> : <p></p>
        }
        <Row>
          <CardGroup>
            {movies.map((m, i) => (
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
