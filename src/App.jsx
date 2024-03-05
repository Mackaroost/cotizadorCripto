import React, { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Heading from './components/Heading'
import Formulario from './components/Formulario'
import Resultado from './Resultado'

const App = () => {
  const [monedas, setMonedas] = useState({})
  const [cotizacion, setCotizacion] = useState({})

  useEffect(() => {
    if (Object.keys.length > 0) {
      const CalcularData = async () => {
        const { moneda, criptomoneda } = monedas
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
        // console.log(url)

        try {
          const data = await fetch(url)
          const res = await data.json()
          // console.log(res)
          setCotizacion(res.DISPLAY[criptomoneda][moneda])
        } catch (error) {
          console.log(`Tenemos el siguiente error: ${error}`)
        }
      }
      CalcularData()
    }
  }, [monedas])

  return (
    <>
      <Nav />
      <Heading />
      <Formulario setMonedas={setMonedas} />
      {
      cotizacion.PRICE && <Resultado cotizacion={cotizacion} />
     }
    </>

  )
}

export default App
