import { Metadata } from 'next'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Link from "next/link"

export const metadata: Metadata = {
  title: "Home | Javi M.",
  description: "Javier Martinez (@hoogmin) | Coder/Programmer.",
  viewport: "width=device-width, initial-scale=1",
  robots: "all",
  openGraph: {
    title: "Home | Javi M.",
    description: "Javier Martinez (@hoogmin) | Coder/Programmer."
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
                src="/profile1_nodata_site.jpg"
                alt="Javier M Picture"
                width={141}
                height={141}
                className={styles.borderCircle}
                priority
              />
            </div>
            <div className="mt-3">
              <h4>Javier M.</h4>
            </div>
          </div>
          <div className="col-md-8">
            <div className="mt-3 mt-md-0">
              <h2>About Me</h2>
              <p>
                Welcome. I&apos;m Javi. I like things coding and technology related. I mainly do
                web development &#40;JavaScript/TypeScript, React, etc&#41;. I also like Python
                and PowerShell, Both of which I have used for general automation. GNU/Linux is an
                operating system I have been passionate about since my teens and even used it as my
                main system at one point. I am a self-learning type, meaning I prefer to learn via online
                courses &#40;YouTube, Udemy, etc&#41;, books, and actual projects. I first began my journey in my early
                teens learning the C and Javascript languages with the intention of building games with them. I
                would say the ability to figure out and apply concepts quickly has carried me a lot. Thanks
                for checking out my site. I built it using Next.js and TypeScript. Feel free to check out
                other things I have worked on in the <Link href="/projects"><FontAwesomeIcon icon={faCodeBranch}/>projects</Link> section.
              </p>
              <h2>Contact&#47;Social</h2>
              <ul>
                <li>
                <FontAwesomeIcon
                icon={faEnvelope}
                style={{ marginRight: 5 }}
                />
                  Email: javier.martinezbz@gmail.com
                </li>
                <li>
                <FontAwesomeIcon
                icon={faGithub}
                style={{ marginRight: 5 }}
                />
                  GitHub: <a href="https://github.com/hoogmin" target="_blank" rel="noopener noreferrer">@hoogmin</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
