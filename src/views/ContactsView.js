import React from 'react'
import BreadcrumbSection from '../section/BreadcrumbSection'
import ContactForm from '../section/ContactForm'
import MapSection from '../section/MapSection'
import Navbar from '../section/NavbarSection'
import Footer from '../section/FooterSection';

function ContactsView() {

  window.top.document.title = 'Fixxo. | Contacts'

  return (
    <>
      <Navbar />
      <BreadcrumbSection link="/" currentPage="| Contacts" />
      <MapSection />
      <ContactForm />
      <Footer />
    </>
  )
}

export default ContactsView