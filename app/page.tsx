import { Metadata } from 'next'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import Link from "next/link"

export const metadata: Metadata = {
  title: "Home | Javier M.",
  description: "Javier Martinez (@hoogmin) | Freelance Coder",
  viewport: "width=device-width, initial-scale=1",
  robots: "all",
  openGraph: {
    title: "Home | Javier M.",
    description: "Javier Martinez (@hoogmin) | Freelance Coder"
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
              <p>Freelance Web Developer</p>
            </div>
          </div>
          <div className="col-md-8">
            <div className="mt-3 mt-md-0">
              <h2>About Me</h2>
              <p>
                Welcome. I'm Javier. I am a freelance web developer whose mission is to
                take your vision and make it reality. I am Full-Stack, meaning I can handle
                tasks from how your website/webapp &#40;Front-End&#41; looks to the code powering its functionality behind the
                scenes &#40;Back-End&#41;. I have experience building static websites, backend APIs, and complete web applications.
                I am also very familiar with Linux and creating API integrations between different applications. You can find some
                of the projects I have worked on in the <Link href="/projects"><FontAwesomeIcon icon={faCodeBranch}/>Projects</Link> page.
                Interested? Email me at <a href="mailto:javier.martinezbz@gmail.com">javier.martinezbz@gmail.com</a> or message me on&nbsp;
                <a href="https://www.upwork.com/freelancers/~01fae346cb0e37280b" rel="noopener noreferrer" target="_blank">Upwork</a>.
                Thanks!
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
                <li>
                <FontAwesomeIcon
                icon={faXTwitter}
                style={{ marginRight: 5 }}
                />
                  Twitter/X: <a href="https://twitter.com/hexjavi" target="_blank" rel="noopener noreferrer">@hexjavi</a>
                </li>
              </ul>
              <h2>Skills Overview</h2>
              <ul>
                <li>HTML/CSS/JS, JavaScript/TypeScript, React.js, Next.js, Bootstrap</li>
                <li>Node.js, Express</li>
                <li>C#, ASP.NET Core, Razor Pages</li>
                <li>Unix-Like Systems like Linux and FreeBSD</li>
                <li>Databases: Relational and Non-relational such as MySQL and MongoDB</li>
                <li>
                  Punctual, responsive, and honest. I show you my progress and I don't flake on people.
                  If there is an issue, you can count on me being communicative about it.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
