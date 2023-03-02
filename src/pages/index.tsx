import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import { Inconsolata } from 'next/font/google'
import hljs from 'highlight.js'
import rs from 'highlight.js/lib/languages/rust'
import { useEffect } from 'react'
import styles from '@/styles/Home.module.css'

const inconsolata = Inconsolata({ subsets: ["latin"], weight: "400", style: "normal" })

// Without this config, a warning about
// XSS will occur in the console. I opted to
// disable it since the code block is only
// a raw string and not 'unescaped html'
// as the warning seems to think.
hljs.configure({
  ignoreUnescapedHTML: true
})

hljs.registerLanguage('rust', rs)

export default function Home() {

  useEffect(() => {
    hljs.highlightAll()
  }, [])

  return (
    <>
      <Head>
        <title>Javi M. | Coder / Programmer</title>
        <meta name="description" content="Javier Martinez (@hoogmin) | Coder/Programmer. Personal Site." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="all" />
        <meta property="og:title" content="Javi M. | Coder / Programmer"/>
        <meta property="og:description" content="Javier Martinez (@hoogmin) | Coder/Programmer. Personal Site."/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={`${styles.topheader} ${inconsolata.className}`}>
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
      </header>
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
        <section>
          <pre>
            <code className="rust">
{`fn main() {
    let z: i32 = 2772;
    println!("The Lucky Hex: {}", format!("0x{:X}", z));
}

>> The Lucky Hex: 0xAD4
`}
            </code>
          </pre>
        </section>
      </main>
      <footer className={`${styles.footer} ${inconsolata.className}`}>
        <small>Copyright &copy; 2023 Javier Martinez</small>
      </footer>
    </>
  )
}
