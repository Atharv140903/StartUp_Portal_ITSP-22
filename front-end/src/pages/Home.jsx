import React from 'react';

import Category_btn from '../components/Home/Category_btn/Category_btn';
import CategoryItem from '../components/Home/CategoryList/CategoryItem';
import Footer from '../components/Home/Footer/Footer.jsx';
import Navbar from '../components/Home/Navbar/Navbar.jsx';


const Home = () => {
  return (
    <>
    <Navbar/>
    {/* <Category_btn/> */}
    <CategoryItem/>
    <hr/>
    <Footer/>
  </>
  )
}

export default Home;


