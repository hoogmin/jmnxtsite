"use client"

import { Container, Row, Col } from "react-bootstrap"

const CoolFooter = () => {
    return (
        <footer className="bg-transparent py-3 text-center position-absolute w-100 bottom-0">
            <p>&copy; {new Date().getFullYear()} Javier Martinez</p>
        </footer>
    )
}

export default CoolFooter