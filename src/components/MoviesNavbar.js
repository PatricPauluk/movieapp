// React
import { useEffect } from 'react';

// Bootstrap
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


// Responsável pelas requisições com a API
import api from '../services/api';

const MoviesNavbar = ({ searchValue, setSearchValue, setMovies , setTotalResults }) => {

  // Função de busca: busca na API a cada letra que for digitada no campo de busca
  const handleSearch = async () => {
    try {
      // console.log(searchValue)
      const res = await api.get("?s="+searchValue+"&apikey=42dbe614");

      if (res.data.Response === "False") {
        throw new Error(res.data.Error)
      }
      setMovies(res.data.Search);
      setTotalResults(res.data.totalResults)
    } catch (e) {
      // console.log(e);
      setMovies([])
      setTotalResults(0)
    }
  }

  // Responsável por executar a função de busca na API em cada alteração no campo de busca (searchValue)
  useEffect(() => {
    handleSearch();
  }, [searchValue])

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
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Buscar..."
            className="me-2"
            aria-label="Buscar"
            value={searchValue}
            onChange={ (e) => setSearchValue(e.target.value) }
          />
        </Form>
      </Container>
    </Navbar>
  );
}

export default MoviesNavbar;