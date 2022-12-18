import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const HandleFavoriteButton = ({ imdbID, myFavorites, setMyFavorites }) => {

  const [variant, setVariant] = useState();
  const [heartIco, setHeartIco] = useState();

  const handleFavorite = () => {
    // Se não tiver o filme dos favoritos, acrescente. Se já estiver nos favoritos, remova.
    if (isFavorite()) {
      setMyFavorites([...myFavorites, imdbID])
      setVariant('outline-light')
      setHeartIco(<AiOutlineHeart />)
    } else {
      myFavorites.splice(myFavorites.indexOf(imdbID), 1);
      setVariant('danger')
      setHeartIco(<AiFillHeart />)
    }
  }

  const isFavorite = () => {
    return myFavorites.indexOf(imdbID) === -1 ? false : true;
  }

  return (
    <>
      { 
        isFavorite ?
          <Button variant="outline-light" onClick={handleFavorite}>Favoritos <AiOutlineHeart /></Button> :
          <Button variant="danger" onClick={handleFavorite}>Favoritos <AiFillHeart/></Button>
      }
    </>
  )
}

export default HandleFavoriteButton;