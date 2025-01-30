import React from "react";
import "./Contact.css";

const Contact = () => {
    return (
        <div className="contact section__padding bg__whitesmoke">
            <div className="container" id="register">
                <h2 className="section__title text__center">Register</h2>
                <p className="para__text text__center">Join us by Registering for Health Hack 3.0,exiting goodies and prices is awaiting for you.</p>

                <div className="contact__content">
                    <form>
                        <div className="form__elem form__elem--2">
                            <input type = "text" className="form__control" placeholder="Your Name" />
                            <input type = "text" className="form__control" placeholder="Your email" />
                        </div>
                        <div className="form__elem">
                            <input type = "text" className="form__control" placeholder="Your Title" />
                        </div>
                        <div className="form__elem">
                            <textarea className="form__control" placeholder="Your Comment" rows = "6"></textarea>
                        </div>
                        <button type = "submit" className="form__submit--btn btn btn__blue">Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;