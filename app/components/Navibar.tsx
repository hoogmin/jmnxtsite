"use client"

import Link from "next/link"
import { Navbar, Nav, Container } from "react-bootstrap"
import { usePathname } from "next/navigation"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHomeAlt, faEnvelope, faLaptopCode } from "@fortawesome/free-solid-svg-icons"

const Navibar = () => {
    const pathname = usePathname()

    return (
        <Navbar bg="transparent" expand="lg">
            <Container>
                <Link href="/" className="navbar-brand">JMZCoder</Link>

                {/* Hamburger menu for mobile */}
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>

                {/* Collapsible content */}
                <Navbar.Collapse id="basic-navbar-nav">
                    {/* Links justified to the right */}
                    <Nav className="ml-auto">
                        <Link 
                        href="/" 
                        className={pathname === '/' ? "nav-link active" : "nav-link"}>
                            <FontAwesomeIcon
                            icon={faHomeAlt}
                            style={{ marginRight: 5 }}
                            />
                            Home
                        </Link>
                        <Link 
                        href="/contact" 
                        className={pathname === "/contact" ? "nav-link active" : "nav-link"}>
                            <FontAwesomeIcon
                            icon={faEnvelope}
                            style={{ marginRight: 5 }}
                            />
                            Contact
                        </Link>
                        <a 
                        href="https://github.com/hoogmin" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="nav-link">
                            <FontAwesomeIcon
                            icon={faLaptopCode}
                            style={{ marginRight: 5 }}
                            />
                            Projects
                        </a>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navibar