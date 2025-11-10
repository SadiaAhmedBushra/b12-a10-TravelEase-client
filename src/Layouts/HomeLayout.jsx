import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import { Outlet } from 'react-router';

const HomeLayout = () => {
    return (
        <div className='bg-[#F9F8F6]'>
            <Header></Header>
            <main className=''>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;