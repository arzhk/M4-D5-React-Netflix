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
    this.state.isSearch
      ? this.setState({ isSearch: false })
      : this.setState({ isSearch: true });
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
            <img
              src={netflixlogo}
              width="auto"
              height="33px"
              className="mb-0 ml-4"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>

          <Nav className="mr-auto mb-0">
            <Nav.Link style={{ color: "white", fontSize: "0.8rem" }}>
              Home
            </Nav.Link>
            <Nav.Link style={{ color: "white", fontSize: "0.8rem" }}>
              Tv Shows
            </Nav.Link>
            <Nav.Link style={{ color: "white", fontSize: "0.8rem" }}>
              Recently Added
            </Nav.Link>
            <Nav.Link style={{ color: "white", fontSize: "0.8rem" }}>
              Recently Added
            </Nav.Link>
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
            <Nav.Link style={{ color: "white", fontSize: "0.8rem" }}>
              KIDS
            </Nav.Link>
            <img style={{ height: "20px" }} src={giftIcon}></img>
          </Form>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;

/* <nav class="navbar navbar-expand-lg">
<a class="navbar-brand ml-4" href="#">
  <img src="imgs/logo.png" height="45" alt="" loading="lazy" />
</a>
<button
  class="navbar-toggler"
  type="button"
  data-toggle="collapse"
  data-target="#navbarSupportedContent"
  aria-controls="navbarSupportedContent"
  aria-expanded="false"
  aria-label="Toggle navigation"
>
  <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mr-auto">
    <li class="nav-item active">
      <a class="nav-link" href="#"
        >Home <span class="sr-only">(current)</span></a
      >
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">TV Shows</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Movies</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Recently Added</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">My List</a>
    </li>
  </ul>

  <ul class="navbar-nav ml-auto">
    <li class="nav-item dropdown">
      <a
        class="nav-link dropdown-toggle"
        href="#"
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <i class="fas fa-search mr-2"></i>
        User
        <img
          src="./imgs/user.png"
          height="30"
          alt=""
          class="mx-2 rounded"
        />
      </a>
      <div
        class="dropdown-menu dropdown-menu-right"
        aria-labelledby="navbarDropdown"
      >
        <a class="dropdown-item" href="settings.html">Settings</a>
        <a class="dropdown-item" href="profile.html">Profile</a>
      </div>
    </li>
  </ul>
</div>
</nav> */
