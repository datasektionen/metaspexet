import React from "react"
import { Link } from "gatsby"
import "../styles/navbar.css"
import logotype from "../images/logo.png"

const Navbar = () => {
    return (
        <nav>
            <div className="container">
            <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><img src={logotype} alt="Metaspexet logo"/></Link>
            </div>
            <Link to="/about" className="link container">Beställa nu</Link>
            <Link to="/about" className="link container">Kontakta oss</Link>
            <Link to="/about" className="link container">Hemkört</Link>
            <Link to="/about" className="link container">Meny</Link>
            <Link to="/about" className="link container">Hitta hit</Link>
        </nav>
    )
}

export default Navbar