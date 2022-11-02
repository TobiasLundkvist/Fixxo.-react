import React from 'react'
import Navbar from '../section/NavbarSection';
import errorPage from '../assets/images/404-error-page.jpg'

function NotFoundView() {
  return (
    <>
      <Navbar />
      <div className='errorPage container'>
        <img src={errorPage} alt='errorPage' />
      </div>
    </>

  )
}

export default NotFoundView