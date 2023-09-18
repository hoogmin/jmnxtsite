import '@/styles/globals.css'
import Navibar from '@/components/Navibar'
import CoolFooter from '@/components/CoolFooter'
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
import { Source_Code_Pro } from "next/font/google"

const sourceCodePro = Source_Code_Pro({
    subsets: ["latin"],
    weight: "400",
    style: "normal"
})

config.autoAddCss = false

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={sourceCodePro.className}>
                <Navibar/>
                {children}
                <CoolFooter/>
            </body>
        </html>
    )
}