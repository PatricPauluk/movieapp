// Bootstrap
import Card from 'react-bootstrap/Card';

// Functions
import VerifyType from '../functions/VerifyType';
import HandleFavoriteButton from '../functions/HandleFavoriteButton'

const MovieItem = ({ imdbID, title, year, type, poster, myFavorites, setMyFavorites }) => {
  
  
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
        {/* Contém o botão e todas as suas funções */}
        <HandleFavoriteButton 
          imdbID={imdbID}
          myFavorites={myFavorites}
          setMyFavorites={setMyFavorites}
        />
        {imdbID}
      </Card.Body>
    </Card>
  )
}

export default MovieItem;