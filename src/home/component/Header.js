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
                <a href="#" className="icon ion-social-twitter"><span></span></a>
                <a href="#" className="icon ion-social-facebook"><span></span></a>
                <a href="#" className="icon ion-social-googleplus"><span></span></a>
                <a href="#" className="icon ion-social-linkedin"><span></span></a>
                <a href="#" className="icon ion-social-dribbble-outline"><span></span></a>
            </div>
        </header>
    )
}
