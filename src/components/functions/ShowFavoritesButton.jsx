// Hooks
import { useState } from 'react';

// Bootstrap
import { Button } from 'react-bootstrap';

// API
import api from '../../services/api';

const ShowFavoritesButton = ({ setMovies, myFavoritesID }) => {

  let favoriteList = [];
  let item;

  const showFavorites = () => {
    favoriteList = [];

    // Bom essa parte aqui merece uma nota bem destacada:
    // Levei uns 3 dias pra fazer funcionar corretamente.
    // Tentei criar uma lista através de um useState de array e também não dava certo,
    // a melhor forma foi essa, alimentando um array comum dentro dele mesmo, e zerando ele
    // todas as vezes em que foi chamado.
    // Mas a cereja do bolo esta aqui: o TRY/CATCH TEM DE ESTAR DENTRO DO MAP, e não o map dentro
    // do try/catch! Acaba não retornando nada, ou retorna as vezes e bugado.
    // Realmente fiz essa nota ENORME pois levei uns 3 dias pra descobrir.
    myFavoritesID.map(async id => {
      try {
        const res = await api.get("?i="+id+"&apikey=42dbe614");

        if (res.data.Response === "False") {
          throw new Error(res.data.Error);
        }

        item = {
          imdbID: res.data.imdbID,
          Title: res.data.Title,
          Year: res.data.Year,
          Type: res.data.Type,
          Poster: res.data.Poster
        }

        favoriteList = [...favoriteList, item]
        
        console.log(favoriteList);
        setMovies(favoriteList);
      } catch (e) {
        console.log(e);
      }
    })
    
  }

  
  

  return (
    <>
      <Button onClick={showFavorites}>Mostrar Favoritos (só no console)</Button>
    </>
  )
}

export default ShowFavoritesButton;