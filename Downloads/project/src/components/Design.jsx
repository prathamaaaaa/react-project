import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home';
import AboutPage from './pages/AboutPage';
import Service from './Service';
import Product from './Product';
import Contact from './Contact';
import Layout from './Layout'; // Import Layout
import { motion, useScroll } from 'framer-motion';
import Allpage from './Allpage';
import ServicePage from './pages/ServicePage';
import ProductPage from './pages/ProductPage';
import ProductPage1 from './pages/ProductPage1';

function Design() {
    const { scrollYProgress } = useScroll();

    return (
        <Router>
            <motion.div
                style={{
                    scaleX: scrollYProgress,
                    scrollbarWidth: 'auto',
                    height: '5px',
                    position: 'sticky',
                    top: 0,
                    transformOrigin: '0%',
                    background: 'green',
                    zIndex: 1000
                }}
            />
            
            <div className='w-screen'>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Allpage />} />
                        <Route path="about" element={<AboutPage />} />
                        <Route path="service" element={<ServicePage />} />
                        <Route path="product" element={<ProductPage1 />} />
                        <Route path="contact" element={<Contact />} />
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}

export default Design;
