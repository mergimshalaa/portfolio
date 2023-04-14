import './App.css'
import { Route, Routes } from "react-router-dom";
import { Home } from '../src/pages/Home/Home';
import { About } from '../src/pages/About/About';
import { Projects } from '../src/pages/Projects/Projects';
import { Resume } from '../src/pages/Resume/Resume';
import { Navbar } from '../src/components/Navbar/Navbar';
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
