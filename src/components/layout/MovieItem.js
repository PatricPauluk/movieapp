import Card from 'react-bootstrap/Card';
import VerifyType from '../functions/VerifyType';
import Button from 'react-bootstrap/Button';
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const MovieItem = ({ imdbID, title, year, type, poster, myFavorites, setMyFavorites }) => {
  
  const handleFavorite = () => {
    
    myFavorites.indexOf(imdbID) ? setMyFavorites([...myFavorites, imdbID]) : myFavorites.splice(myFavorites.indexOf(imdbID), 1);

    // myFavorites.forEach(favorite  => {
    //   favorite === imdbID ? myFavorites.splice(myFavorites.indexOf(imdbID), 1) : setMyFavorites([...myFavorites, imdbID])
    //   favorite === imdbID ? console.log("É igual") : console.log("Não é igual")
    // })
  }

  return (
    <Card className="bg-dark mx-1 mb-2">
      <Card.Img variant="top" src={poster} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{year}</Card.Subtitle>
        <Card.Text>
          {/* Função que traduz o tipo de conteúdo (filme, série ou jogo) */}
          <VerifyType type={type}/>
        </Card.Text>
        <Button variant="outline-light" onClick={handleFavorite}>Favoritos <AiOutlineHeart/></Button>
        <Button variant="danger" onClick={() => console.log(myFavorites)}>Favoritos <AiFillHeart/></Button>
        {imdbID}
      </Card.Body>
    </Card>
  )
}

export default MovieItem;