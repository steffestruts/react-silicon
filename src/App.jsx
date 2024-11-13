import './assets/css/styles.css'
import Header from './components/Header'
import AppFeatures from './components/AppFeatures'
import HowDoesItWork from './components/HowDoesItWork'
import TransferSimple from './components/TransferSimple'
import Testomonial from './components/Testimonial'
import FAQ from './components/FAQ'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
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
