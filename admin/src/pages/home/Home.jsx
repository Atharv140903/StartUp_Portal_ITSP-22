import React from 'react'
import './home.scss'
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Widget from "../../components/widget/Widget";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";


const home = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="homeContainer">
        <Navbar />
        <div className='widgets'>
            <Widget type="user"/>
        </div>
      </div>

    </div>
  )
}

export default home
