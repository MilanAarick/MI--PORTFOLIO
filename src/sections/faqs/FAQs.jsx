import faqs from './data'
import FAQ from './FAQ'
import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'
 

import "./faqs.css"

const FAQs = ()=> {
 
  useEffect(()=>{
    AOS.init({duration:2500});
  })

  return (
   <section id="faqs">
    <h2>Frequetly Asked Questions</h2>
    <p>Here are some questions i usually get. Click to toggle the answer. 
      If any more question contact me directly front the contact section! </p>
    <div className="container faqs__container" data-aos="fade-in">
      { faqs.map(faq =>(
        <FAQ key={faq.id} faq={faq}/>
      ))}
    </div>
    </section>
  )
}

export default FAQs