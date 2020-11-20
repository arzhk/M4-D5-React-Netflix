import React, { Component } from "react";
import instagramIcon from "../images/instagramIcon.png";

class Footer extends Component {
  render() {
    return (
      <div>
        {/* Footer */}
        <footer className="page-footer font-small stylish-color-dark pt-4">
          {/* Footer Links */}
          <div className="container text-center text-md-left">
            {/* Grid row */}
            <div className="row">
              {/* Grid column */}
              <div className="col-md-4 ml-0">
                {/* Content */}
                {/* Social buttons */}
                <ul className="list-unstyled list-inline text-left ">
                  <li className="list-inline-item">
                    <a className="btn-floating btn-fb mx-1">
                      <i class="fab fa-facebook-square fa-2x"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn-floating btn-tw mx-1"></a>
                    <i class="fab fa-instagram fa-2x"></i>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn-floating btn-gplus mx-1">
                      <i className="fab fa-twitter fa-2x"> </i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn-floating btn-li mx-1">
                      <i class="fab fa-youtube fa-2x"></i>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Social buttons */}
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="row">
              <div className="col-md-2 mx-auto">
                {/* Links */}

                <ul className="list-unstyled">
                  <li>
                    <a href="#!">Link 1</a>
                  </li>
                  <li>
                    <a href="#!">Link 2</a>
                  </li>
                  <li>
                    <a href="#!">Link 3</a>
                  </li>
                  <li>
                    <a href="#!">Link 4</a>
                  </li>
                </ul>
              </div>
              {/* Grid column */}
              <hr className="clearfix w-100 d-md-none" />
              {/* Grid column */}
              <div className="col-md-2 mx-auto">
                {/* Links */}

                <ul className="list-unstyled">
                  <li>
                    <a href="#!">Link 1</a>
                  </li>
                  <li>
                    <a href="#!">Link 2</a>
                  </li>
                  <li>
                    <a href="#!">Link 3</a>
                  </li>
                  <li>
                    <a href="#!">Link 4</a>
                  </li>
                </ul>
              </div>
              {/* Grid column */}
              <hr className="clearfix w-100 d-md-none" />
              {/* Grid column */}
              <div className="col-md-2 mx-auto">
                {/* Links */}

                <ul className="list-unstyled">
                  <li>
                    <a href="#!">Link 1</a>
                  </li>
                  <li>
                    <a href="#!">Link 2</a>
                  </li>
                  <li>
                    <a href="#!">Link 3</a>
                  </li>
                  <li>
                    <a href="#!">Link 4</a>
                  </li>
                </ul>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <hr className="clearfix w-100 d-md-none" />
              {/* Grid column */}
              <div className="col-md-2 mx-auto">
                <ul className="list-unstyled">
                  <li>
                    <a href="#!">Link 1</a>
                  </li>
                  <li>
                    <a href="#!">Link 2</a>
                  </li>
                  <li>
                    <a href="#!">Link 3</a>
                  </li>
                  <li>
                    <a href="#!">Link 4</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Grid row */}

            {/* Footer Links */}
            <hr />
            <hr />

            {/* Copyright */}
            <div className="footer-copyright text-center py-3">
              © 2020 Copyright:
              <a href="https://netflix.com/"> netflix.com</a>
            </div>
          </div>
          {/* Copyright */}
        </footer>
        {/* Footer */}
      </div>
    );
  }
}

export default Footer;
