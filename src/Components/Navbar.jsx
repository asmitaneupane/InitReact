import React, { Component } from "react";
import "../../src/assets/navbar.css";
import { Link } from "react-router-dom";
import { FaHome, FaBookOpen, FaBook, FaBookDead, FaUser } from "react-icons/fa";

class Navbar extends Component {
  render() {
    return (
      <div className="sidenav">
        <Link to="/">
          Home <FaHome />
        </Link>

        <Link to="#">
        Books <FaBookDead />
          <Link to="/addbook">
            Add <FaBookDead />
          </Link>

          <Link to="/listbook">
            List <FaBookDead />
          </Link>

        </Link>

        <Link to="/students">
          Students <FaUser />
        </Link>

        <Link to="/return">
          Return <FaBookOpen />
        </Link>

        <Link to="/borrow">
          Borrow <FaBook />
        </Link>
      </div>
    );
  }
}
export default Navbar;
