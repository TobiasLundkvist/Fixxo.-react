import React from 'react'

function ContactForm() {
  return (
    <section className="contact">
        <div className="container">
            <h3>Come in Contact with Us</h3>
            <form className="contact-form" onSubmit="submitForm(event)" noValidate>
                <div>
                    <input id="name" type="text" onkeyup="validate(event)" name="" placeholder="Your Name" />
                    <div id="nameErrorMessage" className="errorMessage"></div>
                </div>
                <div>
                    <input id="email" type="email" onkeyup="validate(event)" name="" placeholder="Your Mail"/>
                    <div id="emailErrorMessage" className="errorMessage"></div>
                </div>
                <div className="textarea">
                    <textarea id="comment" onkeyup="validate(event)" name="" placeholder="Comments"></textarea>
                    <div id="commentErrorMessage" className="errorMessage"></div>
                </div>
                <div>
                    <button type="submit" className="btn-red">Post Comments</button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default ContactForm