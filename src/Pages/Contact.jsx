import React from 'react'
import HeroPoster from '../Components/HeroPoster'
import ContactForm from '../Components/ContactForm'
import Contactinfo from '../Components/Contactinfo'
import Services from '../Components/Services'

export default function Contact() {
  return (
    <div>
      <HeroPoster title="Contact" breadcrumb="Home > Contact" />
      <Contactinfo />
      <ContactForm />
      <Services />
    </div>
  )
}
