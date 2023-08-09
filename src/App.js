import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes, Route, Link   //Link is used to navigate between pages in react router
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        
        <Routes>
        <Route path="/general" element={<News pageSize={5} country="in" category="general"/>}></Route>
        <Route path="/" element={<News pageSize={5} country="in" category="general"/>}></Route>
        <Route path="/business" element={<News pageSize={5} country="in" category="business"/>}></Route>
        <Route path="/entertainment" element={<News pageSize={5} country="in" category="entertainment"/>}></Route>
        <Route path="/health" element={<News pageSize={5} country="in" category="health"/>}></Route>
        <Route path="/science" element={<News pageSize={5} country="in" category="science"/>}></Route>
        <Route path="/sports" element={<News pageSize={5} country="in" category="sports"/>}></Route>
        <Route path="/technology" element={<News pageSize={5} country="in" category="technology"/>}></Route>
        </Routes>
        
        </Router>
      </div>
    )
  }
}


// 583f311b5e434228a685f999e9799aaa API Key for news api