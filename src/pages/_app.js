import '@/styles/globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer/footer'

export default function App({ Component, pageProps }) {
  return (
    <div className='flex flex-col items-center w-full'>
    {/* <Header/>
    <Component {...pageProps} /> */}
    <Footer/>
    </div>
  )
}
