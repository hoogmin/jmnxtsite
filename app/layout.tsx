import '@/styles/globals.css'
import Navibar from '@/components/Navibar'
import CoolFooter from '@/components/CoolFooter'
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"

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
            <body>
                <Navibar/>
                {children}
                <CoolFooter/>
            </body>
        </html>
    )
}