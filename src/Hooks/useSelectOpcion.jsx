import React, { useState } from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
font-size:2rem;
color:#333;
text-align:center;
`
const Select = styled.select`
border-radius: 8px;
width:100%;
padding:0.5rem;
margin:0.3rem;
font-size:1.6rem;
`
const ContainerInputs = styled.div`
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  padding:1rem;

@media(min-width:868px){
  flex-direction: row;
}
`
const useSelectOpcion = (label, opciones) => {
  const [state, setState] = useState('')

  const SelectMoneda = () => (
    <ContainerInputs>
      <Label>{label}</Label>
      <Select
        value={state}
        onChange={(e) => setState(e.target.value)}
      >
        <option> Seleccione</option>
        {
                opciones.map((item) => (
                  <option key={item.id} value={item.id}>{item.name}</option>
                )
                )
            }
      </Select>
    </ContainerInputs>
  )
  return [state, SelectMoneda]
}

export default useSelectOpcion
