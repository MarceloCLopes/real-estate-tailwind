import { Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { PropertyDetails } from './pages/PropertyDetails'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='property/:id' element={<PropertyDetails />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
