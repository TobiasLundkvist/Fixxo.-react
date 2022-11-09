import React, { useEffect, useState } from 'react'

function ContactForm() {
    const [contactForm, setContactForm] = useState({
        name: '', 
        email: '', 
        comment: ''
    })

    const [formErrors, setFormErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)

    const validate = (values) => {
        const errors ={}
        const regex_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        const regex_name = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u

        if(!values.name)
            errors.name = "You must enter a name"
        else if(!regex_name.test(values.name))
            errors.name ="Your name can not include numbers or special characters"
        else if(values.name.length < 2)
            errors.name = "Your name must be longer then two characters"

        if(!values.email)
            errors.email = "You must enter an email address"
        else if(!regex_email.test(values.email))
            errors.email = "You must enter an valid email address, eg. tobias@domain.se"

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

    const handleKeyUp = (e) => {
        e.preventDefault();
        const error = {}
        const inputId = e.target.id
        const inputValue = e.target.value

        if (inputId === "name") {
            const pattern = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
            
            if (inputValue.match(pattern)) {
                e.target.classList.remove("error")
                setFormErrors(error)
            } else {
                e.target.classList.add("error")
                error.name = "Your name can not include numbers or special characters"
                setFormErrors(error)
            }
        }
        if (inputId === "email") {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            
            if (inputValue.match(pattern)) {
                e.target.classList.remove("error")
                setFormErrors(error)
            } else {
                e.target.classList.add("error")
                error.email = "You must enter an valid email address, eg. tobias@domain.se"
                setFormErrors(error)
            }
        }
        if (inputId === "comment") {
            if(inputValue.length > 5) {
                e.target.classList.remove("error")
                setFormErrors(error)
            } else {
                e.target.classList.add("error")
                error.comment = "Your comment must be longer then five characters"
                setFormErrors(error)
            }

        }
    }

    const handleChange = (e) => {
        const {id, value} = e.target
        setContactForm({...contactForm, [id]: value})
        handleKeyUp(e) 
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
                        submitted ? (<div className='thankYouMessage'>Thank you for your comment! <br></br>We will contact you within 5 working days.</div>)
                        :
                        <>
                            <h3>Come in Contact with Us</h3>
                            <form className="contact-form" onSubmit={handleSubmit} noValidate>
                                <div>
                                    <input id="name" type="text" placeholder="Your Name" value={contactForm.name} onChange={handleChange}  required/>
                                    <div className="errorMessage">{formErrors.name}</div>
                                </div>
                                <div>
                                    <input id="email" type="email" placeholder="Your Mail" value={contactForm.email} onChange={handleChange} required/>
                                    <div className="errorMessage">{formErrors.email}</div>
                                </div>
                                <div className="textarea">
                                    <textarea id="comment" placeholder="Comments" value={contactForm.comment} onChange={handleChange}></textarea>
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