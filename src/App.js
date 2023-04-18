import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import Logement from './pages/Logement';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/logement/:id" element={<Logement />} />
                <Route exact path="/About" element={<About />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    );
};

export default App;
