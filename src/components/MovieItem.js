import Card from 'react-bootstrap/Card';

const MovieItem = ({ title, year, type, poster }) => {

  const verifyType = type => {
    return  type === "movie" ? "Filme" : 
            type === "game" ? "Jogo" :
            type === "series" ? "Série" : 
            null;
  }
  
  return (
    <Card className="bg-dark mx-1 mb-2">
      <Card.Img variant="top" src={poster} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{year}</Card.Subtitle>
        <Card.Text>
          {verifyType(type)}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default MovieItem;