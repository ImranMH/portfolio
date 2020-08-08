import React from 'react'
import './Footer.css'
import image1 from '../css-examples/images/photo-1.jpg'
import image2 from '../css-examples/images/photo-2.jpg'

export default function Footer() {
    return (
        <footer className="footer-section">
            <div className="footer_top">
                <div className="footer_menu">
                    <div className="f_nav">
                        <h3>News</h3>
                        <ul>
                            <li><a href="#">agency news</a></li>
                            <li><a href="#">brand news</a></li>
                            <li><a href="#">Industry news</a></li>
                            <li><a href="#">marketing resourses</a></li>
                            <li><a href="#">interviews</a></li>
                            <li><a href="#">awards</a></li>
                            <li><a href="#">web design</a></li>
                        </ul>
                    </div>
                    <div className="f_nav">
                        <h3>work</h3>
                        <ul>
                            <li><a href="#">ad company</a></li>
                            <li><a href="#">social media marketing</a></li>
                            <li><a href="#">blogging</a></li>
                            <li><a href="#">marketing resourses</a></li>
                            <li><a href="#">awards</a></li>
                            <li><a href="#">web design</a></li>
                        </ul>
                    </div>
                    <div className="f_nav">
                        <h3>blog</h3>
                        <ul>
                            <li><a href="#">Marketing</a></li>
                            <li><a href="#">SEO & SEM</a></li>
                            <li><a href="#">Virtual Reality</a></li>
                            <li><a href="#">Al Marketing</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer_widget">
                    <h3>featuures posts</h3>
                    <div className="widget_container">
                        <div className="f_item">
                            <div className="feature_image">
                                <img src={image2} alt="" />
                            </div>
                            <div className="item_content">
                                <h4 className="title">news</h4>| <small>   marketing news</small>
                                <h2>Lorem ipsum dolor sit amet consectetur.</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A excepturi adipisci harum illum.</p>
                            </div>
                        </div>
                        <div className="f_item">
                            <div className="feature_image">
                                <img src={image1} alt="" />
                            </div>
                            <div className="item_content">
                                <h4 className="title">news</h4>| <small>   marketing news</small>
                                <h2>Lorem ipsum dolor sit amet consectetur.</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A excepturi adipisci harum illum.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_bottom">
                <div className="fb_left">
                    <h2>Lorem, ipsum dolor sit amet <br /> consectetur adipisicing elit.</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam tempore labore dolorum itaque ullam fugit exercitationem id, totam facere quis ab amet</p>
                </div>
                <div className="fb_right">
                    <button className="btn">upgrade my plan</button>
                </div>
            </div>
        </footer>
    )
}
