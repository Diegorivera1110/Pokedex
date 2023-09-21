import React, {useState, useEffect } from "react";

import About from './components/About';
import Error from './components/Error';
import Favorites from './components/Favorites';
import Filter from './components/Filter';
import footer from './components/Footer';
import Header from './components/Header';
import LoadingSpinner from './components/LoadingSpinner';
import Modal from './components/Modal';
// import Navigation from './components/'
import Notifications from './components/Notifications';
import PokeCard from './components/PokeCard';
import PokeDetail from './components/PokeDetail';
import PokeList from './components/PokeList';
import Search from './components/Search';

import { openModal } from "./redux/actions";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {
    BrowserRouter as Router,
    Route,
    Routes,
    navigate
} from 'react-router-dom';

function App() {
    const[load, updateLoad] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            updateLoad(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Router>
            
            <div className ="App" id={load ? "no-scroll" : "scroll"}>

                <Routes>
                    <Route path="/" element={<Home /> } />
                </Routes>

                {isOpen && (
                    <div className="modal">
                        <div className="modal-content">
                            <span className="close" onClick={handleCloseModal}>
                                &times;
                            </span>
                            <p>{}</p>
                        </div>
                    </div>
                )}

            </div>
        </Router>

    );
}

export default App;