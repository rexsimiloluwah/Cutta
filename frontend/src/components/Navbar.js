import React, {useState} from 'react'
import {Nav, Navbar, NavbarToggler, Collapse, NavItem, NavbarBrand, NavLink, NavbarText, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle} from 'reactstrap'
import '../App.css'

const NavComponent = (props) => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleNav = () => {
        setIsOpen(!isOpen)
    }

    return(
        <div>
            <Navbar color="light" light expand = "lg" className="shadow">
                <NavbarBrand href="/">Cutta <span role="img" aria-label="error">♻️</span></NavbarBrand>
                <NavbarToggler onClick={toggleNav}></NavbarToggler>
                <Collapse isOpen = {isOpen} navbar>
                    <Nav className = "ml-auto" navbar>
                        <NavItem>
                            <NavLink href="#" className="navlink">Home</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="#" className="navlink">APIs</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="#" className="navlink">Why Us ?</NavLink>
                        </NavItem>

                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret> 
                                Features
                            </DropdownToggle>

                            <DropdownMenu right>
                                <DropdownItem>
                                    URL Shortener
                                </DropdownItem>

                                <DropdownItem>
                                    Webiste Analytics
                                </DropdownItem>

                                <DropdownItem divider/>

                                <DropdownItem>
                                    APIs
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>

                    <NavbarText>
                        <div>
                            <a href="https://www.linkedin.com/in/similoluwa-okunowo-595787179/" target="blank"><i className="bx bxl-linkedin-square bx-lg"></i></a>
                            <a href="https://medium.com/@rexsimiloluwa" target="blank"><i className="bx bxl-medium-square bx-lg"></i></a>
                        </div>
                    </NavbarText>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default NavComponent