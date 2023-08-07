import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import CardHandler from './components/Card'

export default function App() {

    return(
        <>
        <div className="mc header">
            <h1 className='mc title'>Memory Cat</h1>
            <p className='mc subtitle'>A memory card based on cats!</p>
            <Header />
        </div>
        <div className="mc main">
            <CardHandler />
        </div>
        </>
    )

}
