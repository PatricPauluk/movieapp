// React
import { useState } from 'react';

// Bootstrap
import Button from 'react-bootstrap/Button';

// Icons
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const HandleFavoriteButton = ({ imdbID, myFavorites, setMyFavorites }) => {

  // É meu favorito? Retorna true ou false
  const isFavorite = () => {
    return myFavorites.indexOf(imdbID) > -1 ? false : true;
  }

  // As constantes definem o estilo inicial do botão
  const [variant, setVariant] = useState(isFavorite() ? 'outline-light' : 'danger');
  const [heartIco, setHeartIco] = useState(isFavorite() ? <AiOutlineHeart /> : <AiFillHeart />);

  // Ao clicar no botão favoritos: Edita o estilo e, se não tiver o filme dos favoritos, acrescente. Se já estiver nos favoritos, remova.
  const handleFavorite = () => {
    if (isFavorite()) {
      buttonStyle();
      setMyFavorites([...myFavorites, imdbID]);
    } else {
      buttonStyle();
      myFavorites.splice(myFavorites.indexOf(imdbID), 1);
    }
  }

  // Edita o estilo do botão (caso seja favorito, ou não)
  const buttonStyle = () => {
    if (isFavorite()) {
      console.log('fiquei vermelho')
      setVariant('danger');
      setHeartIco(<AiFillHeart />);
    } else {
      console.log('fiquei branco')
      setVariant('outline-light');
      setHeartIco(<AiOutlineHeart />);
    }
  }


  // const verFavoritos = () => {
  //   console.log(myFavorites);
  //   console.log(myFavorites.indexOf(imdbID))
  // }

  return (
    <>
      <Button
        variant={variant}
        onClick={handleFavorite}>
        Favoritos {heartIco}
      </Button>
      {/* <Button variant="primary" onClick={verFavoritos}>Ver Favoritos</Button> */}
    </>
  )
}

export default HandleFavoriteButton;