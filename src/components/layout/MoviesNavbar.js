// Bootstrap
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


// Functions
import HandleSearch from '../functions/HandleSearch';
import HandleSearchFavorites from '../functions/HandleSearchFavorites'

const MoviesNavbar = ({ searchValue, setSearchValue, movies, setMovies, setTotalResults, myFavorites }) => {

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">MovieApp</Navbar.Brand>
          <HandleSearchFavorites 
            myFavorites={myFavorites} 
            movies={movies}
            setMovies={setMovies}
          />
        {/* Campo form de busca contendo as funções para retornar dados da API */}
        <HandleSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          setMovies={setMovies}
          setTotalResults={setTotalResults}
        />
      </Container>
    </Navbar>
  );
}

export default MoviesNavbar;