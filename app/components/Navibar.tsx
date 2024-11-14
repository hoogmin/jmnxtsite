"use client"

import Link from "next/link"
import { Navbar, Nav, Container } from "react-bootstrap"
import { usePathname } from "next/navigation"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHomeAlt, faLaptopCode, faCube } from "@fortawesome/free-solid-svg-icons"
import ThemeFlip from "./ThemeFlip"

const Navibar = () => {
    const pathname = usePathname()

    return (
        <Navbar bg="transparent" expand="lg">
            <Container>
                <Link href="/" className="navbar-brand">Javi M.</Link>
                <ThemeFlip/>

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
                        href="/projects" 
                        className={pathname === "/projects" ? "nav-link active" : "nav-link"}>
                            <FontAwesomeIcon
                            icon={faLaptopCode}
                            style={{ marginRight: 5 }}
                            />
                            Projects
                        </Link>
                        <Link 
                        href="/softcube" 
                        className={pathname === "/softcube" ? "nav-link active" : "nav-link"}>
                            <FontAwesomeIcon
                            icon={faCube}
                            style={{ marginRight: 5 }}
                            />
                            Profile Cube
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navibar