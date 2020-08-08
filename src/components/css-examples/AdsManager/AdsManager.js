import React from 'react'
import './AdsManager.css'


export default function AdsManager() {
    return (
        <div className="adsm container">
            <section className="search_area">
                <div className="search">
                    <i className="fas fa-search"></i>
                    <input type="text" placeholder="Search Ads" />
                </div>

                <button className="filter">Filters <span className="notification">3</span></button>
            </section>
            <table cellSpacing="0">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Clicks</th>
                        <th>Priority</th>
                        <th>Impressions</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="priority-200">
                        <td>Lorem ipsum dolor sit amet.</td>
                        <td>845</td>
                        <td><i className="fas fa-circle"></i>200</td>
                        <td>190</td>
                        <td> <button className="delete"><i className="fas fa-trash"></i></button></td>
                    </tr>
                    <tr className="priority-300">
                        <td>Our favorite IPhone soluation.</td>
                        <td>620</td>
                        <td><i className="fas fa-circle"></i>200</td>
                        <td>190</td>
                        <td><button className="delete"><i className="fas fa-trash"></i></button></td>
                    </tr>
                    <tr className="priority-600">
                        <td>audiod jack collecting to own</td>
                        <td>430</td>
                        <td><i className="fas fa-circle"></i>200</td>
                        <td>190</td>
                        <td><button className="delete"><i className="fas fa-trash"></i></button></td>
                    </tr>
                    <tr className="priority-200">
                        <td>memory form tips</td>
                        <td>500</td>
                        <td><i className="fas fa-circle"></i>200</td>
                        <td>190</td>
                        <td><button className="delete"><i className="fas fa-trash"></i></button></td>
                    </tr>
                    <tr className="priority-300">
                        <td>Cables over the tops</td>
                        <td>130</td>
                        <td><i className="fas fa-circle"></i>200</td>
                        <td>190</td>
                        <td><button className="delete"><i className="fas fa-trash"></i></button></td>
                    </tr>
                </tbody>
            </table>
        </div >
    )
}
