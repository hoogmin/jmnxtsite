import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons"
import Link from "next/link"
import PortfolioCarousel from "@/components/PortfolioCarousel"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Projects | Javier M.",
    description: "Projects | Javier Martinez (@hoogmin) | Coder/Programmer.",
    viewport: "width=device-width, initial-scale=1",
    robots: "all",
    openGraph: {
        title: "Projects | Javi M.",
        description: "Projects | Javier Martinez (@hoogmin) | Coder/Programmer."
    }
}

const ProjectsPage = () => {
    return (
        <>
            <header className="page-basic-heading">
                <h1>
                    Featured Projects
                </h1>
                <br />
                <h6>
                    <a
                        className="button-hyperlink"
                        href="https://github.com/hoogmin"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithubAlt} style={{ marginRight: 5 }} />
                        GitHub
                    </a>
                </h6>
            </header>
            <main className="container">
                <PortfolioCarousel/>
            </main>
        </>
    )
}

export default ProjectsPage