// Bootstrap
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
// Responsável pelas requisições com a API
import api from '../../services/api';

const HandleSearchFavorites = ({ myFavorites, movies, setMovies }) => {

  // Função de busca: busca na API a cada letra que for digitada no campo de busca
  const handleSearchFavorites = async () => {


    const listFavorites = [];

    try {
      myFavorites.map(async (favorites, i, array) => {
        const res = await api.get("?i="+favorites+"&apikey=42dbe614");

        if (res.data.Response === "False") {
          throw new Error(res.data.Error)
        }

        const favMovieData = {
          imdbID: res.data.imdbID,
          Title: res.data.Title,
          Year: res.data.Year,
          Type: res.data.Type,
          Poster: res.data.Poster
        };

        listFavorites.push({favMovieData});
        // if (myFavorites.length)
        // console.log("Index de myFavorites: "+myFavorites.length);

        // setMovies([...movies, favMovieData]);
      })
    } catch (e) {
      console.log(e);
      setMovies([]);
    } finally {
      console.log(listFavorites);
      setMovies(listFavorites);
      console.log(movies);
    }
  }

  return (
        <Button onClick={handleSearchFavorites}>Meus Favoritos</Button>
  )
}

export default HandleSearchFavorites;