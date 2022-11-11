import React from 'react'
import BreadcrumbSection from '../section/BreadcrumbSection'
import MapSection from '../section/MapSection'
import Navbar from '../section/NavbarSection'
import Footer from '../section/FooterSection'
import ContactForms from '../section/ContactForms';

function ContactsView() {

  window.top.document.title = 'Fixxo. | Contacts'

  return (
    <>
      <Navbar />
      <BreadcrumbSection link="/" currentPage="| Contacts" />
      <MapSection />
      <ContactForms />
      <Footer />
    </>
  )
}

export default ContactsView