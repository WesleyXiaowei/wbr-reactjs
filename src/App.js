import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import AboutUs from './components/pages/AboutUs'
import Contact from './components/pages/Contact'

import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'

import Container from './components/layout/Container'

import Books from './components/pages/services/Books'
import Tests from './components/pages/services/Tests'
import Courses from './components/pages/services/Courses'

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
          <Route path="courses" element={<Courses/>} />
          <Route path="books" element={<Books/>} />
          <Route path="tests" element={<Tests/>} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
