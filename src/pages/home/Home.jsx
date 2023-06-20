import React from 'react'
import Sidebar  from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import './home.scss'
import Widget from '../../components/widgets/Widget'
import Featured from '../../components/featured/Featured'
import Chart from '../../components/chart/Chart'
import List from '../../components/tables/Table'

const Home = ()=>{
  return (
    <div className='home'>
      <Sidebar />
      <div className='homeContainer'>
        <Navbar />
        <div className='widgets'>
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="balance" />
          <Widget type="earning" />
        </div>
        <div className="charts">
          <Featured />
          <Chart />
        </div>
        <div className="listContainer">
          <div className="listTitle">
            Latest Trens
          </div>
          <List />
        </div>
      </div>
    </div>
  )
}

export default Home
