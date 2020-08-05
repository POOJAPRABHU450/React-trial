import React from 'react'
import Nav from './Components/Nav'
import Left from './Components/Left'
import Center from './Components/Center'
import Footer from './Components/Footer'


function App(){
    return(
        <div>
            <img src={process.env.PUBLIC_URL + "/logo.jpg"} alt="mypic"/>
            <Nav />
            <Left />
            <Center />
            <Footer />
        </div> 
       
    )
}

export default App


