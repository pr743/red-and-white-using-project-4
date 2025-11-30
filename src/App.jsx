import React from 'react'
import Gift from './Card/Gift'
import Navbar from './Card/Navbar'
import Effortlessly from './Card/Effortlessly'
import Card from './Card/Card'
import Hello from './Card/Hello'
import Holiday from './Card/Holiday'
import Red from './Card/Red'
import Birthday from './Card/Birthday'
import Thank from './Card/Thank '
import Celebration from './Card/Celebration'
import Appreciation from './Card/Appreciation'
import Encouragement from './Card/Encouragement'
import Workplace from './Card/Workplace'
import Anytime from './Card/Anytime'
import Business from './Card/Business'
import Other from './Card/Other'
import Footer from './Card/Footer'

function App() {
  return (
    <>
     <Navbar/>
   
   <br />
   
    <Gift/>
    <Effortlessly />

    <Card /> 

    <Hello />
    <Holiday />
    <Red />
    <Birthday/>
    <Thank />
    <Celebration />
    <Appreciation/>
    <Encouragement/>
    <Workplace/>
    <Anytime/>
    <Business/>
    <br />
    <br />
    <Other/>
    <br />
    <br />
    
    <Footer/>
    </>
  )
}

export default App
