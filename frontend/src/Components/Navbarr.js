import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbarr() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky='top'>
    <Container fluid>
      <Navbar.Brand href="#">QA_RDGN</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="/home">Home</Nav.Link>
          <NavDropdown title="Qui somme-nous" id="navbarScrollingDropdown">
            <NavDropdown.Item href="/equipe-dirigeante">
            Notre équipe dirigeante
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/nos-divisions">
              Nos Divisions
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="News" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Events</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              Projects
            </NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>
          <NavDropdown title="Ressources" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Documents</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              SANKOFA RDGN
            </NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>
          <Nav.Link href="#action2">Regional Dashboard</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navbarr