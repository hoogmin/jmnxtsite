"use client"

import { Container } from "react-bootstrap"

const NotFound = () => {
    return (
        <Container className="text-center my-4">
            <h1 className="display-4">404 Not Found</h1>
            <p className="lead">Sorry, the page you are looking for does not exist.</p>
        </Container>
    )
}

export default NotFound