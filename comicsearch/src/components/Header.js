import React, {useState} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Header = (props) => {

    return (
			<>
				<Navbar fixed='top' />
				<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
					<Navbar.Brand href='#home'>Comics!</Navbar.Brand>
					<Navbar.Toggle aria-controls='responsive-navbar-nav' />
					<Navbar.Collapse id='responsive-navbar-nav'>
						<Nav className='mr-auto'></Nav>
						<Nav>
							<Nav.Link href='home'>Home</Nav.Link>
							<Nav.Link href='comics'>Characters</Nav.Link>
							<Nav.Link href='about'>About</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</>
		);

}

export default Header