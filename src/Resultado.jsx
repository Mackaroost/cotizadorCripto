import React from 'react'
import styled from '@emotion/styled'

const Title = styled.h1`
text-align:center;
color:#333;
font-weight: bold;
font-size:3rem;
marging:2rem 0;
`
const Parrafo = styled.p`
font-weight:bold;
color:#373744;
padding:.5rem;
font-size:1.6rem;
span{
    color:#a5a7af;
}
`
const ContainerCard = styled.div`
display:flex;
flex-direction: column;
justify-conter:center;
align-items:center;
`

const Card = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding:3rem;
margin:1rem;
gap: 2rem;


@media(min-width: 868px){
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    max-width:60rem;
    border-radius: 1rem;
    background-color: white;
   
}
`
const ContainerImg = styled.div`

img{
    width:20rem;
}
`
const ContainerText = styled.div`
display: flex;
flex-direction:column;
`

const Resultado = ({ cotizacion }) => {
  // console.log(cotizacion)
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = cotizacion
  return (
    <ContainerCard>
      <div>
        <Title> Cotización </Title>
      </div>
      <Card>
        <ContainerImg>
          <img alt='btc' src={`https://cryptocompare.com/${IMAGEURL}`} />
        </ContainerImg>
        <ContainerText>
          <Parrafo>Precio Actual: <span>{PRICE}</span></Parrafo>
          <Parrafo>Precio mas Alto: <span>{HIGHDAY}</span></Parrafo>
          <Parrafo>Precio mas Bajo:<span>{LOWDAY}</span></Parrafo>
          <Parrafo> Variacion ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Parrafo>
          <Parrafo> Actualizado: <span>{LASTUPDATE}</span></Parrafo>
        </ContainerText>
      </Card>
    </ContainerCard>
  )
}

export default Resultado
