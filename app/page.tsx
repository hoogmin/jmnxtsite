import { Metadata } from 'next'
import Image from 'next/image'
import { Inconsolata } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inconsolata = Inconsolata({ subsets: ["latin"], weight: "400", style: "normal" })

export const metadata: Metadata = {
    title: "Javi M. | JMZCoder",
    description: "Javier Martinez (@hoogmin) | Coder/Programmer. Freelance Site.",
    viewport: "width=device-width, initial-scale=1",
    robots: "all",
    openGraph: {
        title: "Javi M. | JMZCoder",
        description: "Javier Martinez (@hoogmin) | Coder/Programmer. Freelance Site."
    }
}

export default function HomePage() {

  return (
    <>
      <div className={`${styles.topheader} ${inconsolata.className}`}>
        <Image
        src="/profile1_nodata_site.jpg"
        alt="Javi Profile Picture"
        width={141}
        height={141}
        className={styles.borderCircle}
        priority
        />
        <h2 className={styles.topheaderitem}>Javier Martinez</h2>
        <h4 className={styles.topheaderitem}>Code, Software, and Technology</h4>
      </div>
      <main className={`${styles.main} ${inconsolata.className}`}>
        <section>
          <p>
            Welcome to my modest corner of the net. This site serves as my personal web
            presence. I like writing code. I have utilized many programming languages, though
            JS/TS, Python, and C# are used the most for me. I also really enjoy Linux-based operating systems
            and am quite familiar with them (Ubuntu, OpenSUSE, Arch, Etc). I still prefer Windows primarily.
          </p>
        </section>
        <section>
          <p>
            Thanks for checking out the site. If interested you can check out my public projects/contributions on <a href="https://github.com/hoogmin" rel="noreferrer noopener">GitHub</a>. I built this site with the
            power of Next.js 13 and TypeScript.
          </p>
        </section>
        <section>
          <p>
            Looking to contact? Fire an email to &lt;<strong>javier.martinezbz@gmail.com</strong>&gt;
          </p>
        </section>
      </main>
    </>
  )
}
