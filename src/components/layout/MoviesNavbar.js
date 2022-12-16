// Bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// Functions
import HandleSearch from '../functions/HandleSearch';

const MoviesNavbar = ({ searchValue, setSearchValue, setMovies , setTotalResults }) => {

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">MovieApp</Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav> {/* Joga o "meus favoritos" p/ direita */}
          <Nav>
            <Nav.Link href="#deets">Meus Favoritos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
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