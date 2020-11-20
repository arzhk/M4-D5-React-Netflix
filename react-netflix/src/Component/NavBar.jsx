import React from "react";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import netflixlogo from "../images/netflixlogo.png";
import searchIcon from "../images/searchIcon.png";
import giftIcon from "../images/giftIcon.png";
class NavBar extends React.Component {
  state = {
    isSearch: false,
  };

  toggleSearch = () => {
    this.state.isSearch ? this.setState({ isSearch: false }) : this.setState({ isSearch: true });
  };

  render() {
    return (
      <div>
        <Navbar
          className="d-flex align-items-center"
          style={{
            position: "fixed",
            zIndex: "1",
            width: "100%",
            backgroundColor: "#020102",
          }}
        >
          <Navbar.Brand href="#home">
            <img src={netflixlogo} width="auto" height="33px" className="mb-0 ml-4" alt="React Bootstrap logo" />
          </Navbar.Brand>

          <Nav className="mr-auto mb-0">
            <Nav.Link style={{ color: "white", fontSize: "0.8rem" }}>Home</Nav.Link>
            <Nav.Link style={{ color: "white", fontSize: "0.8rem" }}>Tv Shows</Nav.Link>
            <Nav.Link style={{ color: "white", fontSize: "0.8rem" }}>Recently Added</Nav.Link>
            <Nav.Link style={{ color: "white", fontSize: "0.8rem" }}>Recently Added</Nav.Link>
          </Nav>
          <Form inline>
            <img
              style={{
                height: "20px",
                cursor: "pointer",
                marginRight: "10px",
              }}
              src={searchIcon}
              onClick={this.toggleSearch}
            ></img>
            <FormControl
              className={this.state.isSearch ? "d-block" : "d-none"}
              style={{ backgroundColor: "transparent", borderRadius: "0" }}
              type="text"
              placeholder="Titles,people,genres"
            />
            <Nav.Link style={{ color: "white", fontSize: "0.8rem" }}>KIDS</Nav.Link>
            <img style={{ height: "20px" }} src={giftIcon}></img>
          </Form>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
