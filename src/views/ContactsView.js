import React from 'react'
import BreadcrumbSection from '../section/BreadcrumbSection'
import ContactForm from '../section/ContactForm'
import MapSection from '../section/MapSection'
import Navbar from '../section/NavbarSection'
import Footer from '../section/FooterSection';

function ContactsView() {
  return (
    <>
      <Navbar />
      <BreadcrumbSection link="/" end/>
      <MapSection />
      <ContactForm />
      <Footer />
    </>
  )
}

export default ContactsView