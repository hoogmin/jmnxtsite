import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Projects | Javi M.",
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
            <main>
                <ol className="centered-list">
                    <li>
                        <a href="https://github.com/hoogmin/EnergizingMiniQuest" target="_blank" rel="noopener noreferrer">Energizing Mini Quest</a>
                        : C#&#47;Unity Game made in 72 Hours.
                        &#40;
                        <a href="https://gamejolt.com/games/ld39_energizing_mini_quest/273245" target="_blank" rel="noopener noreferrer">Release Page</a>
                        &#41;
                    </li>
                    <li>
                        <a href="https://github.com/hoogmin/Chaos-Cell" target="_blank" rel="noopener noreferrer">Chaos Cell</a>
                        : C#&#47;Unity Game made in 48 Hours.
                        &#40;
                        <a href="https://gamejolt.com/games/chaos-cell-ld40/301301" target="_blank" rel="noopener noreferrer">Release Page</a>
                        &#41;
                    </li>
                    <li>
                        <a href="https://www.infinityrfg.net" target="_blank" rel="noopener noreferrer">Infinity Roofing &amp; Sheet Metal</a>
                        : Website for a roofing company created with a content management system.
                    </li>
                    <li>
                        <Link href="/" target="_blank" rel="noopener noreferrer">My own site</Link>
                        : Built using Next.js, React, and TypeScript.
                    </li>
                </ol>
            </main>
        </>
    )
}

export default ProjectsPage