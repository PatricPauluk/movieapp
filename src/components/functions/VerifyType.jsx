const VerifyType = ({ type }) => {

  // Verifica o tipo de conteúdo, traduz e retorna pro usuário
  const verifyType = type => {
    return  type === "movie" ? "Filme" : 
            type === "game" ? "Jogo" :
            type === "series" ? "Série" : 
            null;
  }

  return (
    <>
      {verifyType(type)}
    </>
  )
}

export default VerifyType;