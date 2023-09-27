"use client"

import { Container, Button } from "react-bootstrap"
import { useRouter } from "next/navigation"

const NotFound = () => {
    const router = useRouter()

    const handleBackClick = () => {
        router.push('/')
    }

    return (
        <Container className="text-center my-4">
            <h1 className="display-4">404 Not Found</h1>
            <p className="lead">Sorry, the page you are looking for does not exist.</p>
            <Button variant="primary" onClick={handleBackClick}>
                Back to Home
            </Button>
        </Container>
    )
}

export default NotFound