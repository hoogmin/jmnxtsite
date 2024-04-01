import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons"
import Link from "next/link"
import PortfolioCarousel from "@/components/PortfolioCarousel"
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
            <main className="container">
                {/* <ol className="centered-list">
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
                        : Website for a roofing company created with a content management system &#40;Wix&#41;.
                    </li>
                    <li>
                        <a href="https://github.com/hoogmin/arkaclone" target="_blank" rel="noopener noreferrer">Arkaclone</a>
                        : A 3D clone of the classic game Arkanoid/Break The Bricks built with three.js playable in the browser.
                    </li>
                    <li>
                        <Link href="/" target="_blank" rel="noopener noreferrer">My own site</Link>
                        : Built using Next.js, React, and TypeScript.
                    </li>
                </ol> */}
                {/* <div id="portfolioCarousel" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#portfolioCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#portfolioCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#portfolioCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="/portfolio/innotech.png" className="d-block w-100" alt="Innotech Security, Inc."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>First slide label</h5>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </div>
                        </div>
                        <div className="carousel-item">
                            <img src="/portfolio/infinityrfg.png" className="d-block w-100" alt="Infinity Roofing & Sheet Metal, Inc."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Second slide label</h5>
                                    <p>Some representative placeholder content for the second slide.</p>
                                </div>
                        </div>
                        <div className="carousel-item">
                            <img src="/portfolio/chaos_cell.png" className="d-block w-100" alt="Chaos Cell Ludum Dare"/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Third slide label</h5>
                                    <p>Some representative placeholder content for the third slide.</p>
                                </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#portfolioCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#portfolioCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div> */}
                <PortfolioCarousel/>
            </main>
        </>
    )
}

export default ProjectsPage