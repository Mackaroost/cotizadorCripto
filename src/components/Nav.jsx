import React from 'react'
import styled from '@emotion/styled'
import { linksMenu } from './linkMenu'

const Menu = styled.nav`
  max-width:1200px;
  display:flex;
  justify-content:space-around;
  align-items:center;
  width:100%;
  margin: 0 auto;
  padding: 4rem 0;
`
const ContainerLogo = styled.div`
display:flex;
@media(max-width:498px){
    justify-content:center;
    align-itemns:center;
  }
`
const Logo = styled.p`
font-size: 4rem;
color:#373744;
font-weight:bold;
margin:0;
`

const Links = styled.a`
  text-decoration: none;
  cursor: pointer;
  color:#a5a7af; 
  font-weight:bolder;
  font-size:1.6rem;
  display:block;
  @media(max-width:498px){
    display:none
  }

`

const Nav = () => {
  return (
    <Menu>

      <ContainerLogo>
        <Logo> CryptoPrice </Logo>
      </ContainerLogo>

      {linksMenu.map((item, index) => (

        <Links key={index} href={item.link}>{item.name}</Links>

      ))}

    </Menu>
  )
}

export default Nav
