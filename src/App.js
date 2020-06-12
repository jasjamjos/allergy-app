import React, { useState, useEffect } from 'react';

import Nav from './components/Nav/Nav';
import Gallery from './components/Gallery/Gallery';
import { fetchImages, searchImages } from './api';

import './assets/css/main.css';

const App = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setImages(await fetchImages());
        }
        
        fetchAPI();
    }, []);

    const handleSearch = async (query) => {
        setImages(await searchImages(query))
    }

    return (
        <div>
            <Nav handleSearch={handleSearch} />
            <Gallery images={images} />
        </div>
    );
}

export default App;