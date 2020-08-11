import React, { useState } from 'react'
import {
    Link
} from "react-router-dom";

export default function Header({ menuStatus }) {

    return (
        <header className="navbar navbar-2 boxed navbar-white boxed">
            <div className="navbar-bg"></div>
            <button type="button" onClick={() => {
                menuStatus({ isOpen: true })
            }} className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse"
                aria-expanded="false">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <Link to="/" className="brand" >
                <img className="brand-img" alt="" src="images/brand.png" />
                <div className="brand-info">
                    <div className="brand-name">Jonny</div>
                    <div className="brand-text">creative template</div>
                </div>
            </Link>
            <div className="social-list hidden-xs">
                <a href="https://twitter.com/Imran__mh" target="_blank" className="icon ion-social-twitter"></a>
                <a href="https://www.facebook.com/people/Imran-Hossain/100005169279775" target="_blank" className="icon ion-social-facebook"></a>
                <a href="#" target="_blank" className="icon ion-social-googleplus"></a>
                <a href="https://www.linkedin.com/in/imranmh/" target="_blank" className="icon ion-social-linkedin"></a>
                <a href="https://github.com/ImranMH" target="_blank" className="icon ion-social-github"></a>
            </div>
        </header>
    )
}
