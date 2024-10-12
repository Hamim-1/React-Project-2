import ClientReviews from './components/Home/ClientReviews';
import Hero from './components/Home/Hero';
import Partners from './components/Home/Partners';
import ProblemSolution from './components/Home/ProblemSolution';
import Navbar from './components/Navbar';
import Faq from './components/Home/Faq';
import Note from './components/Home/Note';
import Footer from './components/Footer';
function App() {

  return (
    <main className='px-2 bg-[url(/hero-bg.svg)] min-h-svh bg-no-repeat bg-top'>
      <Navbar />
      <Hero />
      <ProblemSolution />
      <ClientReviews />
      <Partners />
      <Faq />
      <Note />
      <Footer />
    </main>
  )
}

export default App
