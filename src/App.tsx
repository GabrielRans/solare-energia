import Header from './components/Header'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Services from './components/Services'
import Calculator from './components/Calculator'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import WhatsAppButton from './components/WhatsAppButton'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Benefits />
        <Services />
        <Calculator />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App