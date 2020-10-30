import React from 'react'
import {FaBars} from 'react-icons/fa'
import { Nav,
    NavbarContainer,
    Navlogo,
    MobileIcons,
    NavMenu,
    Navitem,
    NavLinks,
    NavBtn,
    NavBtnLinks } from './NavbarElements'

const Navbar = () => {
    return (
        <>
          <Nav>
            <NavbarContainer>
              <Navlogo to='/'>dolla</Navlogo>
              <MobileIcons>
                <FaBars />
              </MobileIcons>
              <NavMenu>
                <Navitem>
                  <NavLinks to='about'>About</NavLinks>
                </Navitem>
                <Navitem>
                  <NavLinks to='discover'>Discover</NavLinks>
                </Navitem>
                <Navitem>
                  <NavLinks to='services'>Services</NavLinks>
                </Navitem>
                <Navitem>
                  <NavLinks to='signup'>Sign Up</NavLinks>
                </Navitem>
              </NavMenu>
              <NavBtn>
                <NavBtnLinks to='signin'>Sign In</NavBtnLinks>
              </NavBtn>
            </NavbarContainer>
          </Nav>
        </>
    )
}

export default Navbar
