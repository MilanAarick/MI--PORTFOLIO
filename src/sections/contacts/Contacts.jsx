import contacts from './data'

import './contacts.css'
const Contacts = () => {
 
  return (
   
   <section id="contact">
    <h2>Get in Touch</h2>

    <p>Drop me a message via any links below</p>


    <div className="container contact__container" data-aos='fade-up'>

    {
          contacts.map(contact => <a key={contact.id} href={contact.link} 
            target="_blank" rel="noopener noreferrer">{contact.icon}</a>)
    }
        
    </div>
    </section>
  )
}

export default Contacts
