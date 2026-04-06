import { BrowserRouter, Route, Routes } from 'react-router-dom' // Changed Switch to Routes
import NotFound from './components/NotFound'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes> {/* Changed Switch to Routes */}
      {/* Updated component to element and removed exact */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      
      {/* NotFound is now a path="*" catch-all */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
)

export default App