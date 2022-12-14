import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import api from '../services/api';

const MoviesNavbar = ({ searchValue, setSearchValue, setMovies }) => {

  const handleSearch = async () => {
    if (searchValue === '') {
      alert("Insira uma busca.");
      return;
    }

    try {
      const res = await api.get("?s="+searchValue+"&apikey=42dbe614");
      setMovies(res.data.Search);
    }catch{
      alert("Erro ao buscar.");
    }
  }

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
          <Button variant="outline-success" onClick={handleSearch}>Buscar</Button>
        </Form>
      </Container>
    </Navbar>
  );
}

export default MoviesNavbar;