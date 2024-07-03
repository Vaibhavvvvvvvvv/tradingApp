import React from 'react'
import { Route, Routes } from "react-router-dom";
import Summary from './Summary'
import Orders from './Orders'
import Holdings from './Holdings'
import Positions from './Positions'
import Funds from './Funds'
import Apps from './Apps'

const Dashboard = () => {
  return (
  <Routes>    
  <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
  </Routes>
  )
}
export default Dashboard
