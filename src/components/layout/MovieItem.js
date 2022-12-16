import Card from 'react-bootstrap/Card';
import VerifyType from '../functions/VerifyType';

const MovieItem = ({ title, year, type, poster }) => {
  
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
      </Card.Body>
    </Card>
  )
}

export default MovieItem;