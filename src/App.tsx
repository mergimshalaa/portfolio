import './App.css'
import { Route, Routes } from "react-router-dom";
import { Home } from './components/Home';
import { About } from './components/About/About';
import { Projects } from './components/Projects/Projects';
import { Resume } from './components/Resume/Resume';
import { Navbar } from './components/Navbar/Navbar';
import { Container } from 'react-bootstrap';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Container>
      <Footer />
    </>
  )
}
