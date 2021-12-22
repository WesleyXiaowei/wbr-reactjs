import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import AboutUs from './components/pages/AboutUs'
import Contact from './components/pages/Contact'

import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'

import Container from './components/layout/Container'

function App() {
  return (
    <Router>
      <NavBar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="services" element={<Services/>} />
          <Route path="about-us" element={<AboutUs/>} />
          <Route path="contact" element={<Contact/>} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
