import React from 'react'
import About from '../sections/about/About'
import Contacts from '../sections/contacts/Contacts'
import FAQs from '../sections/faqs/FAQs'
import FloatingNav from '../sections/floating-nav/FloatingNav'
import Footer from '../sections/footer/Footer'
import Header from '../sections/header/Header'
import Navbar from '../sections/navbar/Navbar'
import Portfolio from '../sections/portfolio/Portfolio'
import Services from '../sections/services/Services'
import Testimonials from '../sections/testimonials/Testimonials'
import Theme from '../theme/Theme'
import { useThemeContext } from './../context/theme-context';
import {useRef, useState, useEffect} from 'react'





const App = () => {
  const {themeState} = useThemeContext()
 
  const mainRef = useRef();
  const [showFloatingNav, setShowFloatingNav]=useState(true)
  const [siteYPosition, setSiteYPosition] =useState(0)

  const showFloatingNavHandler = () =>{
    setShowFloatingNav(true)
  }
  const hideFloatingNavHandler = () =>{
    setShowFloatingNav(false)
  }

  const floatingNavToggleHandler =() =>{
    if(siteYPosition < (mainRef?.current?.getBoundingClientRect().y - 20 )|| siteYPosition < (mainRef?.current?.getBoundingClientRect().y + 20 )){
      hideFloatingNavHandler();
    }else{
      showFloatingNavHandler();
    }

    setSiteYPosition(mainRef?.current?.getBoundingClientRect().y)

 }

  useEffect(()=>{
    const checkYPosition = setInterval(floatingNavToggleHandler, 2500);
    

    //SideEffect cleanup function
    return () => clearInterval(checkYPosition)
  })//[siteYPosition]




  // console.log(mainRef.current.getBoundingClientRect())
  return (
    <main className={`${themeState.primary} ${themeState.background}` } ref={mainRef} >
     <Navbar/>
     <Header/>
      <About/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <FAQs/>
      <Contacts/>
      <Footer/>
    {showFloatingNav && <FloatingNav/>}
      <Theme/>
     
  
    </main>
    
  )
}

export default App
 