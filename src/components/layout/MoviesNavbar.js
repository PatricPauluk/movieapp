// Bootstrap
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

// Functions
import HandleSearch from '../functions/HandleSearch';
import ShowFavoritesButton from '../functions/ShowFavoritesButton';

const MoviesNavbar = ({ searchValue, setSearchValue, setMovies, setTotalResults, myFavoritesID }) => {

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">MovieApp</Navbar.Brand>
        {/* Botão que filtra e exibe os favoritos */}
        <ShowFavoritesButton
          setMovies={setMovies}
          myFavoritesID={myFavoritesID}
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