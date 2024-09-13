import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';

import Home from './Pages/Home';
import Test from './Pages/Test';
import ProductDetail from './Pages/ProductDetail';
import Login from './Pages/Login';
import ProductListItem from './Pages/Product-List';
import Shops from './Pages/Shop';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import {
    faShoppingCart,
    faUser,
    faSearch,
    faTimes,
    faArrowRight,
    faArrowLeft,
    faMapLocation,
} from '@fortawesome/free-solid-svg-icons';

library.add(fab, faShoppingCart, faUser, faSearch, faTimes, faArrowRight, faArrowLeft, faMapLocation);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/Test" element={<Test />}></Route>
                <Route path="/shop/:id" element={<Shops />}></Route>
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/Productlist" element={<ProductListItem />} />
            </Routes>
        </Router>
    </React.StrictMode>,
);
