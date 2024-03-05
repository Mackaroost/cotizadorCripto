import React from 'react'
import styled from '@emotion/styled'

const TextError = styled.p`
padding: 1rem;
background-color:#1edeaa;
color:#ffffff;
border-radius: 8px;
margin: 0 auto;
width:20rem;
text-align:center;
margin-top:.5rem;
`

const Error = ({ children }) => {
  return (
    <TextError>{children}</TextError>
  )
}

export default Error
