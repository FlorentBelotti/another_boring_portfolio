import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/common/header'
import Footer from './components/common/footer'
import Content from './components/common/content'
import Home from './components/pages/home'
import Resume from './components/pages/resume'
import Works from './components/pages/works'

export default function App() {
  return (
    <Router>
      <Header />
      <Content> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/works" element={<Works />} />
        </Routes>
      </Content>
      <Footer />
    </Router>
  )
}