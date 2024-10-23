import { Metadata } from 'next'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import Link from "next/link"

export const metadata: Metadata = {
  metadataBase: new URL("https://jmnxtsite.vercel.app"),
  title: "Home | Javier M.",
  description: "Javier Martinez (@hoogmin) | Full-Stack Developer",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Home | Javier M.",
    description: "Javier Martinez (@hoogmin) | Full-Stack Developer",
    images: "https://jmnxtsite.vercel.app/portfolio/jmnxtsite.png"
  },
  twitter: {
    card: "summary_large_image",
    site: "@hexjavi",
    title: "Javi M. Full-Stack Dev Portfolio",
    description: "Javier M's full-stack developer porfolio site.",
    images: "https://jmnxtsite.vercel.app/portfolio/jmnxtsite.png"
  }
}

export default function HomePage() {

  return (
    <>
      <main className="container" style={{ marginTop: 52 }}>
        <div className="row">
          <div className="col-md-4 text-center">
            <div className="profile-picture">
              <Image
                src="/profile2_clean_square.jpg"
                alt="Javier M Picture"
                width={141}
                height={141}
                className={styles.borderCircle}
                priority
              />
            </div>
            <div className="mt-3">
              <h4>Javier M.</h4>
              <p>Full-Stack Web Developer</p>
            </div>
          </div>
          <div className="col-md-8">
            <div className="mt-3 mt-md-0">
              <h2>About Me</h2>
              <p>
                Welcome! I&apos;m Javier, a passionate full-stack web developer.
                I specialize in both MERN &#40;MongoDB, Express, React, Node.js&#41; and C#/ASP.NET technologies, allowing me to tackle projects from front-end to back-end seamlessly. As a self-taught engineer, I am committed to lifelong learning and continuously honing my skills.

                My journey began in game development, which sparked my love for coding and led me to pursue web development professionally. I thrive on building dynamic, user-friendly applications that solve real-world problems.

                Additionally, I have a keen interest in Unix-like operating systems, including Linux and FreeBSD, which fuels my drive for efficient and scalable solutions.

                Thank you for visiting my portfolio! If you&apos;re interested in collaborating or have any questions, feel free to reach out using the contact information below.
              </p>
              <h2>Contact Me</h2>
              <ul>
                <li>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ marginRight: 5 }}
                  />
                  Email: javiermzswe@protonmail.com
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={{ marginRight: 5 }}
                  />
                  GitHub: <a href="https://github.com/hoogmin" target="_blank" rel="noopener noreferrer">@hoogmin</a>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faXTwitter}
                    style={{ marginRight: 5 }}
                  />
                  X: <a href="https://x.com/hexjavi" target="_blank" rel="noopener noreferrer">@hexjavi</a>
                </li>
              </ul>
              <h2>Skills Overview</h2>
              <ul>
                <li>HTML/CSS/JS, JavaScript/TypeScript, React.js, Next.js, Bootstrap, Tailwind CSS</li>
                <li>Node.js, Express</li>
                <li>C#, ASP.NET, Razor Pages</li>
                <li>Unix-Like Systems like Linux and FreeBSD</li>
                <li>Databases: Relational and Non-relational such as MySQL and MongoDB</li>
                <li>Soft-skills such as punctuality, responsiveness, and honesty</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
