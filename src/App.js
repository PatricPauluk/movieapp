// Hooks
import { useState } from 'react';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Components
import MoviesNavbar from './components/layout/MoviesNavbar';
import MovieItem from './components/layout/MovieItem';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardGroup from 'react-bootstrap/CardGroup';


function App() {

  const [ movies, setMovies ] = useState([]); // recebe dados dos filmes
  const [ searchValue, setSearchValue ] = useState(''); // busca dos filmes
  const [ totalResults, setTotalResults ] = useState(0); // quantidade de resultados
  const [ myFavoritesID, setMyFavoritesID ] = useState([]); // salvar favoritos

  // const desenvolvedor = () => {
  //   console.log("\n\n");
  //   console.log("---------- DADOS ----------");
  //   console.log("Campo de busca:");
  //   console.log(searchValue);
  //   console.log("Filmes na lista:");
  //   console.log(movies);
  //   console.log("imdbID meus favoritos: ");
  //   console.log(myFavoritesID);
  //   console.log("\n\n");
  // }
  
  return (
    <div className='App'>
      {/* MoviesNavbar tem o layout da navbar e a função de receber/exibir dados na busca */}
      <MoviesNavbar 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        setMovies={setMovies}
        setTotalResults={setTotalResults}
        myFavoritesID={myFavoritesID}
      />
      {/* <button onClick={desenvolvedor}>Console</button> */}
      {/* Filmes listados dentro de um container conforme a busca do usuário */}
      <Container>
        <h1 className='pt-4'>Lista de Filmes, Séries e Jogos</h1>
        {/* Se não tiver filmes para exibir, deixa uma mensagem para o usuário */}
        {
          movies.length === 0 ? <h5>Faça sua busca.</h5> :
          movies.length > 1 ? <p>{totalResults} resultados na última busca</p> : <p></p>
        }
        <Row>
          <CardGroup>
            {movies.map(m => (
              <Col lg={2} md={3} sm={6}>
                <MovieItem
                  key={m.imdbID}
                  imdbID={m.imdbID}
                  title={m.Title}
                  year={m.Year}
                  type={m.Type}
                  poster={m.Poster}
                  myFavoritesID={myFavoritesID}
                  setMyFavoritesID={setMyFavoritesID}
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
