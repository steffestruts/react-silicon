import './assets/css/styles.css'
import Navigation from './components/Navigation'
import OneAppExplanation from './components/OneAppExplanation'
import AppFeatures from './components/AppFeatures'
import HowDoesItWork from './components/HowDoesItWork'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navigation />
      <main>
        <OneAppExplanation />
        <AppFeatures />
        <HowDoesItWork />
      </main>
      <Footer />
    </>
  )
}

export default App
