import React, { useState } from 'react'

function ContactForm() {
    const [contactForm, setContactForm] = useState({name: '', email: '', comment: ''})
    const [formErrors, setFormErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)

    const validate = (values) => {
        const errors ={}
        const regex_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        const regex_name = /^[A-Z][a-zA-Z]+$/

        if(!values.name)
            errors.name = "You must enter a name"
        else if(!regex_name.test(values.name))
            errors.name ="You must enter a real name"

        if(!values.email)
            errors.email = "You must enter an email address"
        else if(!regex_email.test(values.email))
            errors.email = "You must enter an valid email address"

        if(!values.comment)
            errors.comment = "You must enter a comment"
        else if(values.comment.length < 5)
            errors.comment = "Your comment must be longer then five characters"
            
        if(Object.keys(errors).length === 0)
            setSubmitted(true)
        else
            setSubmitted(false)

        return errors;
    }

    const handleChange = (e) => {
        const {id, value} = e.target
        setContactForm({...contactForm, [id]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validate(contactForm))
    }


    return (    
        <>
            <section className="contact">
                <div className="container">
                    {
                        submitted ? (<div className='thankYouMessage'>Thank you for your comment! <br></br>We will contact you in within 5 working days.</div>)
                        :
                        <>
                            <h3>Come in Contact with Us</h3>
                            <form className="contact-form" onSubmit={handleSubmit} /*onSubmit="submitForm(event)"*/ noValidate>
                                <div>
                                    <input id="name" type="text" className='error' onkeyup="validate(event)" placeholder="Your Name" value={contactForm.name} onChange={handleChange} />
                                    <div className="errorMessage">{formErrors.name}</div>
                                </div>
                                <div>
                                    <input id="email" type="email" className='error' onkeyup="validate(event)" placeholder="Your Mail" value={contactForm.email} onChange={handleChange} />
                                    <div className="errorMessage">{formErrors.email}</div>
                                </div>
                                <div className="textarea">
                                    <textarea id="comment" className='error' onkeyup="validate(event)" placeholder="Comments" value={contactForm.comment} onChange={handleChange}></textarea>
                                    <div className="errorMessage">{formErrors.comment}</div>
                                </div>
                                <div>
                                    <button type="submit" className="btn-red">Post Comments</button>
                                </div>
                            </form>
                        </>
                    }
                </div>
            </section>
        </>
    )
}

export default ContactForm