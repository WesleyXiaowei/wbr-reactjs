import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import AboutUs from './components/pages/AboutUs'
import Contact from './components/pages/Contact'

import Container from './components/layout/Container'

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Início</Link>
        <Link to="/services">Serviços</Link>
        <Link to="/about-us">Sobre nós</Link>
        <Link to="/contact">Contato</Link>
      </div>
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="services" element={<Services/>} />
          <Route path="about-us" element={<AboutUs/>} />
          <Route path="contact" element={<Contact/>} />
        </Routes>
      </Container>
      <p>Footer</p>
    </Router>
  );
}

export default App;
