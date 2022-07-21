import React from 'react';

import Category_btn from '../components/Home/Category_btn/Category_btn';
import Category1 from '../components/Home/Category_cards/Category1/Category1';
import Category2 from '../components/Home/Category_cards/Category2/Category2';
import Footer from '../components/Home/Footer/Footer';


const Home = () => {
  return (
    <>
    <Category_btn/>
    <Category1/>
    <Category2/>
    <hr/>
    <Footer/>
  </>
  )
}

export default Home;


