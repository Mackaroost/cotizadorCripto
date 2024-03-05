import React from 'react'
import styled from '@emotion/styled'

const ContainerTitle = styled.div`
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
margin:1rem;
`

const Title = styled.h3`
text-align:center;
font-size: 4rem;
font-weight:bold;
padding:3rem 0;
color:#373744;
margin:0;
`
const Subtitle = styled.p`
font-size: 2rem;
color:#333;
margin:1rem;
`
const Heading = () => {
  return (
    <ContainerTitle>
      <Title>Encuentra la cotización de Criptomonedas</Title>
      <Subtitle> Haz la cuenta más rápido y precisa</Subtitle>
    </ContainerTitle>
  )
}

export default Heading
