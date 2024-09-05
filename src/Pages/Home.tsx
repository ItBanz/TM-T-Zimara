import React from 'react';
import '../Styles/Home.css';

import Header from '../Components/Header';
import Title from '../Components/Title';
import CategoryMenu from '../Components/Listitem';
import Carousel from '../Components/Carousel';
import ProductList from '../Components/ProductList';
import TopSearch from '../Components/TopSearch';

export default function Home() {
    return (
        <>
            <Header></Header>

            <Title></Title>

            <CategoryMenu></CategoryMenu>

            <Carousel></Carousel>

            <div className="Zimara-Mall"></div>

            <TopSearch></TopSearch>

            <ProductList></ProductList>
        </>
    );
}
