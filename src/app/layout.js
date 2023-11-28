import { Poppins } from 'next/font/google'
import './globals.scss'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Coockies from '@/components/Coockies'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://uplyft-ivory.vercel.app'), // TODO: change to original
  title: {
    template: '%s | UpLyft Financial',
    default: 'UpLyft Financial',
  },
  description: `Your trusted partner in debt solutions, we implement a personalized, empathetic, and honest approach when serving clients, liberating them from the debt that profoundly impacts their life and well-being.`,
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="layout">
          <Header />
          {children}
          <Footer />
          <Coockies />
        </div>
      </body>
    </html>
  )
}

export default RootLayout
