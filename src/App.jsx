import './assets/css/styles.css'
import Navigation from './components/section01/Navigation'
import OneAppExplanation from './components/section01/OneAppExplanation'
import AppFeatures from './components/section02/AppFeatures'
import HowDoesItWork from './components/section03/HowDoesItWork'
import TransferSimple from './components/section04/TransferSimple'
import Testomonial from './components/section05/Testomonial'
import FAQ from './components/FAQ'
import Newsletter from './components/Newsletter'
import Footer from './components/section07/Footer'

function App() {

  return (
    <>
      <Navigation />
      <main>
        <OneAppExplanation />
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
