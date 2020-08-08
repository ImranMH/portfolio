import React from 'react'
import './Card.css'

import user1 from '../images/photo-u1.jpg'
import user2 from '../images/w1.jpg'
import user3 from '../images/photo-u5.jpg'
import photo1 from '../images/photo-11.jpg'
import photo2 from '../images/photo-4.jpg'
import photo3 from '../images/photo-13.jpg'

export default function Card() {
    return (
        <div className="card-container">
            <div className="card">
                <div className="card-header">
                    <img src={photo1} alt="" />
                </div>
                <div className="card-body">
                    <span className="tag tag-purple">technology</span>
                    <h4>Lorem ipsum dolor sit amet consectetur.</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, aperiam!</p>
                    <div className="user">
                        <img src={user1} alt="" />
                        <div className="user-info">
                            <h5>Carrie Brewer</h5>
                            <small>2 h ago</small>
                        </div>
                    </div>
                </div>

            </div>
            <div className="card">
                <div className="card-header">
                    <img src={photo2} alt="" />
                </div>
                <div className="card-body">
                    <span className="tag tag-teal">popular</span>
                    <h4>Lorem ipsum dolor sit amet consectetur.</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, aperiam!</p>
                    <div className="user">
                        <img src={user2} alt="" />
                        <div className="user-info">
                            <h5>alan Brewer</h5>
                            <small>6 h ago</small>
                        </div>
                    </div>
                </div>

            </div>
            <div className="card">
                <div className="card-header">
                    <img src={photo3} alt="" />
                </div>
                <div className="card-body">
                    <span className="tag tag-pink">design</span>
                    <h4>Lorem ipsum dolor sit amet consectetur.</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, aperiam!</p>
                    <div className="user">
                        <img src={user3} alt="" />
                        <div className="user-info">
                            <h5>john doe</h5>
                            <small>4 h ago</small>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
