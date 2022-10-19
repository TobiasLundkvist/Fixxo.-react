import React from 'react'
import { NavLink } from 'react-router-dom'

function BreadcrumbSection({link}) {
  return (
    <section className="breadcrumb">
      <div className='container'>
        <ul className="breadcrumb-list">
            <NavLink to={link} end><li><i className="fa-duotone fa-house"></i></li></NavLink>
            <li>| Contacts</li>
        </ul>
      </div>
    </section>
  )
}

export default BreadcrumbSection