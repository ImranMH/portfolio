import React, { useState } from "react";
const contactData = {
    sectionTitle: 'contact',
    title: "Get In Touch",
}

export default function Page8({ activeClassName, img }) {
    const initialInputState = { name: "", email: "", message: '', subject: '' };
    const [eachEntry, setEachEntry] = useState(initialInputState);
    const { name, email, message, subject } = eachEntry

    const handleSubmit = e => {
        e.preventDefault()
        const { name, email, message, subject } = eachEntry
        // setEachEntry(initialInputState)
        return false
    }
    const handleInputChange = e => {
        setEachEntry({ ...eachEntry, [e.target.name]: e.target.value });
        // console.log(eachEntry);
    };
    return (
        <div data-anchor="page8" className={`pp-scrollable text-white section section-8 ${activeClassName}`}>
            <div className="scroll-wrap">
                <div className="scrollable-content">
                    <div className="vertical-centred">
                        <div className="boxed boxed-inner">
                            <div className="vertical-title text-dark hidden-xs hidden-sm"><span>{contactData.sectionTitle}</span></div>
                            <div className="boxed">
                                <div className="container">
                                    <div className="intro overflow-hidden">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <h2 className="title-uppercase">{contactData.title}</h2>
                                                <div className="contact-info">
                                                    <form onSubmit={handleSubmit} >
                                                        <div className="row">
                                                            <div className="form-group col-sm-6">
                                                                <input value={name} onChange={handleInputChange} type="text" name="name" required
                                                                    placeholder="Name*" />
                                                            </div>
                                                            <div className="form-group col-sm-6">
                                                                <input value={email} onChange={handleInputChange} type="email" name="email" placeholder="Email" />
                                                            </div>
                                                            <div className="form-group col-sm-12">
                                                                <input value={subject} onChange={handleInputChange} type="text" name="subject"
                                                                    placeholder="Subject (Optinal)" />
                                                            </div>
                                                            <div className="form-group col-sm-12">
                                                                <textarea value={message} onChange={handleInputChange} name="message"
                                                                    placeholder="Message*"
                                                                />
                                                            </div>
                                                            <div className="col-sm-12">
                                                                <button type="submit"
                                                                    className="btn">Post Comment</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
