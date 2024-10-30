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
                        I developed a comprehensive website for Innotech Security, a company specializing in innovative security products, including cameras, DVRs, and NVRs. 
                        The website was built using ASP.NET Core, C#, Razor syntax, Entity Framework Core (ORM), and a MySQL database, providing a robust platform for showcasing their offerings and enhancing user engagement.
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
                        I designed and managed a professional website for a roofing company using a content management system (Wix). 
                        This project involved creating a user-friendly interface and optimizing content for better engagement and visibility, ensuring the company effectively showcases its services online.
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
                        Developed a game project in C# within 48 hours as part of the Ludum Dare Game Jam/Hackathon event. 
                        This project showcases my ability to work under tight deadlines, demonstrate creativity, and effectively implement game mechanics in a short timeframe.
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
                        Created an engaging game project in C# over the course of 72 hours as part of a competitive game development challenge. 
                        This project highlights my proficiency in rapid prototyping and my ability to collaborate effectively under pressure while integrating innovative gameplay mechanics.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="/portfolio/jmnxtsite.png" className="d-block w-100" alt="Innotech Security, Inc."/>
                    <Carousel.Caption>
                        <a className="portfolio-label" href="https://github.com/hoogmin/jmnxtsite" target="_blank" rel="noopener noreferrer">
                            <h3>Portfolio Website</h3>
                        </a>
                        <p className="portfolio-description">
                        This portfolio website was developed using Next.js and TypeScript, showcasing my skills in modern web development. 
                        The site features a user-friendly interface with a dark mode option, which can be toggled in the top-left corner using the moon icon.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="/portfolio/arkaclone2.png" className="d-block w-100" alt="Innotech Security, Inc."/>
                    <Carousel.Caption>
                        <a className="portfolio-label" href="https://github.com/hoogmin/arkaclone" target="_blank" rel="noopener noreferrer">
                            <h3>Arkaclone</h3>
                        </a>
                        <p className="portfolio-description">
                        This project is a modern clone of the classic game Arkanoid, featuring an innovative twist with an infinite spin mechanic. 
                        Developed using Three.js, it showcases my ability to create engaging and interactive experiences in web development while providing an enjoyable gaming experience.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default PortfolioCarousel