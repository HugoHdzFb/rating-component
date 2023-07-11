import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Components
import Rating from './Rating'
import Result from './Result'


export default function Home() {
  return (
    <div className='Container'>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Rating />} />
                <Route path="/resultado" element={<Result />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}
