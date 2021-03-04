import React from 'react'
import {useForm} from 'react-hook-form'
import "./ContactForm.css"

function ContactForm() {
    const {register, handleSubmit,watch, errors}= useForm()
    const onSubmit= data=> console.log(data)

    return (
        <>
            <div className="contact-form-section">
                <div className="contact-image">
                    <img src="Images/contact-us.png" alt="contact-us"/>
                </div>
                
                <div className="contact-form-container">
                    <h1>Contact Us</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
                        <input name="name" defaultValue="Your Full Name" ref={register}/>

                        <input name="email" defaultValue="Your Email Address" ref={register({required:true, 
                            maxLength: 100, 
                            pattern:{
                                value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message:"invalid email address"
                            }})}/>
                        <div className="form-group">
                            <textarea name="message" ref={register({required:true})} rows="5" 
                                placeholder="Your Message...">

                                </textarea>
                        </div>

                        <input className="contact-submit-btn" type="submit"/>
                            {errors.email&& errors.email.message}
                    </form>
                </div>
                
            </div>
        </>
    )
}

export default ContactForm
