import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import Logement from './pages/Logement'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const App = () => {
    return (
        <div>
            <Header />
            <main>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/logement/:id" element={<Logement />} />
                    <Route exact path="/about" element={<About />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}

export default App
