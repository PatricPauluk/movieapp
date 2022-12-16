const VerifyType = ({ type }) => {

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