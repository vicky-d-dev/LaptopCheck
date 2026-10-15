import Navbar from '../layout/Navbar'
import Hero from '../sections/home/Hero'
import Problem from '../sections/home/Problem'
import About from '../sections/home/About'
import Services from '../sections/home/Services'
import StatsBar from '../sections/home/StatsBar'
import Testimonials from '../sections/home/Testimonials'
import Contact from '../sections/home/Contact'
import Footer from '../layout/Footer'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Problem />
      <About />
      <Services />
      <StatsBar />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
