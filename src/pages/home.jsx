import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { About } from './about/about';
import { Blog } from './blog/blog';
import { Contact } from './contact/contact';
import { Home } from './home/home';
import { Shop } from './shop/shop';
import { Navbar } from '../layout/navbar';
import { Footer } from '../layout/footer';

export const Bighome = () => {
    return (
        <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop" element={<Shop />} />
        </Routes>
        <Footer/>
        
            
        </>
    );
};

