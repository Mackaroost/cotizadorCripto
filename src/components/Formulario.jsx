import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import useSelectOpcion from '../Hooks/useSelectOpcion'
import { monedas } from './dataMonedas'
import Error from './Error'

const Button = styled.button`
padding: 0.5rem 2rem;
background-color: #7908ff;
color:#ffffff;
font-size:1.6rem;
font-weight:bold;
border:none;
border-radius:10px;
cursor:pointer;
margin-left:1rem;
`

const ContenedorForm = styled.form`
@media(min-width:868px){
width: 850px; 
margin:0 auto;
display:flex;
flex-direction:row;
justify-content: center;
align-items:center;
}

flex-direction:column;
background-color: white;
padding: 3rem;
border-radius:8px;
margin:1rem;
text-align:center;
`
const Formulario = ({ setMonedas }) => {
  const [criptos, setCriptos] = useState([])
  const [error, setError] = useState(false)
  // console.log(setCriptos)
  const [moneda, SelectMoneda] = useSelectOpcion('Moneda', monedas)
  const [criptomoneda, SelectCriptomoneda] = useSelectOpcion('Criptomoneda', criptos)

  useEffect(() => {
    const cargarDatos = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
      try {
        const data = await fetch(url)
        const resp = await data.json()
        const criptoArr = resp.Data.map((item) => {
          const obj = {
            id: item.CoinInfo.Name,
            name: item.CoinInfo.FullName
          }
          return obj
        })
        setCriptos(criptoArr)
      } catch (error) {
        console.log(error)
      }
    }

    cargarDatos()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if ([moneda, criptomoneda].includes('')) {
      setError(true)
      return
    } setError(false)
    setMonedas({ moneda, criptomoneda })
  }
  return (
    <>
      <ContenedorForm onSubmit={handleSubmit}>
        <SelectMoneda />
        <SelectCriptomoneda />
        <Button>Cotizar</Button>
      </ContenedorForm>
      <div>
        {
        error && <Error> Todos los campos son Obligatorios</Error>
      }
      </div>
    </>
  )
}

export default Formulario
