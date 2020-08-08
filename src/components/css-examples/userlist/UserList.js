import React from 'react'
import './UserList.css'
import user1 from '../images/photo-u1.jpg'
import user2 from '../images/w1.jpg'
import user3 from '../images/photo-u5.jpg'
import photo1 from '../images/photo-11.jpg'
import photo2 from '../images/photo-3.jpg'


export default function UserList() {
    return (
        <div className="userlist-container">
            <div className="card">
                <h3>Trending creators</h3>
                <div className="card_item">
                    <div className="card_ussr">
                        <img src={user1} alt="images" />
                        <h4>Amy Adams</h4>
                        <small>2300 Followers</small>
                    </div>
                    <button className="join">Join</button>
                </div>
                <div className="card_item">
                    <div className="card_ussr">
                        <img src={user2} alt="images" />
                        <h4>Jonnet jackson</h4>
                        <small>2300 Followers</small>
                    </div>
                    <button className="join">Jion</button>
                </div>
                <div className="card_item">
                    <div className="card_ussr">
                        <img src={user3} alt="images" />
                        <h4>sara chembell</h4>
                        <small>2300 Followers</small>
                    </div>
                    <button className="join">join</button>
                </div>
                <div className="card_item">
                    <div className="card_ussr">
                        <img src={photo1} alt="images" />
                        <h4>ket winslet</h4>
                        <small>2300 Followers</small>
                    </div>
                    <button className="join">Jion</button>
                </div>
                <div className="card_item">
                    <div className="card_ussr">
                        <img src={photo2} alt="images" />
                        <h4>lindsy lohan</h4>
                        <small>2300 Followers</small>
                    </div>
                    <button className="join">join</button>
                </div>
            </div>
            {/* <div className="card info">
            <div className="card_info">
                <h3>premuam account</h3>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <button className="join">join</button>
            
        </div>  */}
        </div>
    )
}
