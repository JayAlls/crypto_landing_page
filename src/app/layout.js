import './globals.scss'
import Header from "./component/Header/Header";
import Footer from './component/Footer/Footer';



export const metadata = {
  title: 'ChainToken Landing Page',
  description: 'A project for presenting a new Token',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
