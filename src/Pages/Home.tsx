import React from 'react';
import '../Styles//Pages/Home.css';

import Header from '../Components/Header';
import Title from '../Components/Title';
import CategoryMenu from '../Components/Listitem';
import Carousel from '../Components/Carousel';
// import ProductList from '../Components/ProductList';
import TopSearch from '../Components/TopSearch';
import Footer from '../Components/footer';

export default function Home() {
    return (
        <>
            <Header></Header>

            <Title></Title>

            <CategoryMenu></CategoryMenu>

            <Carousel></Carousel>

            <TopSearch></TopSearch>
            {/* 
            <ProductList></ProductList> */}

            <Footer></Footer>
        </>
    );
}
