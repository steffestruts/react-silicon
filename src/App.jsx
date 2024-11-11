import './assets/css/styles.css'
import Header from './components/section01/Header'
import Hero from './components/section01/Hero'
import AppFeatures from './components/section02/AppFeatures'
import HowDoesItWork from './components/section03/HowDoesItWork'
import TransferSimple from './components/section04/TransferSimple'
import Testomonial from './components/section05/Testimonial'
import FAQ from './components/section06/FAQ'
import Newsletter from './components/section06/Newsletter'
import Footer from './components/section07/Footer'

function App() {

  return (
    <>
      <Header />
      <main>
        <Hero />
        <AppFeatures />
        <HowDoesItWork />
        <TransferSimple />
        <Testomonial/>
        <FAQ></FAQ>
        <Newsletter></Newsletter>
      </main>
      <Footer />
    </>
  )
}

export default App
