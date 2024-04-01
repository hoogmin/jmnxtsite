"use client"

import Carousel from "react-bootstrap/Carousel"

const PortfolioCarousel = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img src="/portfolio/innotech3.png" className="d-block w-100" alt="Innotech Security, Inc."/>
                    <Carousel.Caption>
                        <a className="portfolio-label" href="https://innotechsecurity.com" target="_blank" rel="noopener noreferrer">
                            <h3>Innotech Security, Inc.</h3>
                        </a>
                        <p className="portfolio-description">
                            Website I built for Innotech Security, a security/CCTV company that specializes in
                            innovative security products including Cameras, DVRs, NVRs, etc. Built with ASP.NET Core, C#, Razor syntax,
                            Entity Framework Core (ORM), and a MySQL database.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="/portfolio/infinityrfg.png" className="d-block w-100" alt="Innotech Security, Inc."/>
                    <Carousel.Caption>
                        <a className="portfolio-label" href="https://infinityrfg.net" target="_blank" rel="noopener noreferrer">
                            <h3>Infinity Roofing &amp; Sheet Metal, Inc.</h3>
                        </a>
                        <p className="portfolio-description">
                        Website I built and managed for a roofing company using a content management system (Wix).
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="/portfolio/chaos_cell.png" className="d-block w-100" alt="Innotech Security, Inc."/>
                    <Carousel.Caption>
                        <a className="portfolio-label" href="https://github.com/hoogmin/Chaos-Cell" target="_blank" rel="noopener noreferrer">
                            <h3>Chaos Cell</h3>
                        </a>
                        <p className="portfolio-description">
                            Game project written in C# in the span of 48 hours as part of the Ludum Dare Game Jam/Hackathon event.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="/portfolio/emq2.png" className="d-block w-100" alt="Innotech Security, Inc."/>
                    <Carousel.Caption>
                        <a className="portfolio-label" href="https://github.com/hoogmin/EnergizingMiniQuest" target="_blank" rel="noopener noreferrer">
                            <h3>Energizing Mini Quest</h3>
                        </a>
                        <p className="portfolio-description">
                            Game project written in C# in the span of 72 hours as part of the online Ludum Dare Game Jam/Hackathon event.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="/portfolio/jmnxtsite.png" className="d-block w-100" alt="Innotech Security, Inc."/>
                    <Carousel.Caption>
                        <a className="portfolio-label" href="https://jmnxtsite.vercel.app" target="_blank" rel="noopener noreferrer">
                            <h3>Personal Website</h3>
                        </a>
                        <p className="portfolio-description">
                            The very website you are on right now was built using Next.js and TypeScript.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="/portfolio/arkaclone2.png" className="d-block w-100" alt="Innotech Security, Inc."/>
                    <Carousel.Caption>
                        <a className="portfolio-label" href="https://arkaclone.vercel.app" target="_blank" rel="noopener noreferrer">
                            <h3>Arkaclone</h3>
                        </a>
                        <p className="portfolio-description">
                            A clone of the classic game Arkanoid with an infinite spin thrown into the mix. I wanted to build something fun with threejs.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default PortfolioCarousel