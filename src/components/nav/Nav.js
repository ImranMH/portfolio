import React from 'react'
import {
    Link
} from "react-router-dom";
import './Nav.css'

export default function Nav() {
    return (
        // <nav className="navbar navbar-inverse">
        //     <div className="container-fluid">
        //         <div className="navbar-header">
        //             <a className="navbar-brand" href="#">WebSiteName</a>
        //         </div>
        //         <ul className="nav navbar-nav">
        //             <li className="active"><a href="#">Home</a></li>
        //             <li className="dropdown">
        //                 <a className="dropdown-toggle" data-toggle="dropdown" href="#">Page 1
        // <span className="caret"></span></a>
        //                 <ul className="dropdown-menu">
        //                     <li><a href="#">Page 1-1</a></li>
        //                     <li><a href="#">Page 1-2</a></li>
        //                     <li><a href="#">Page 1-3</a></li>
        //                 </ul>
        //             </li>
        //             <li><a href="#">Page 2</a></li>
        //             <li><a href="#">Page 3</a></li>
        //         </ul>
        //     </div>
        // </nav>
        <nav>
            <ul className="nav-bar">
                <li><Link to='/'> Home</Link></li>

                <li><Link to='/contact'> Contact</Link></li>

                <li>
                    <span className="dropdown-btn">Apps</span>
                    <span className="caret"><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                    <ul className="dropdown-menu">
                        <li><Link to="/app/corona">Corona Virus Tracker</Link></li>
                        <li><Link to='/app/expense-tcr'> Expense Tracker</Link></li>
                        <li><Link to='/app/lovecalculator'> Love Calculator</Link></li>
                    </ul>
                </li>
                <li>
                    <span className="dropdown-btn">CSS Examples</span>
                    <span className="caret"><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                    <ul className="dropdown-menu">
                        <li><Link to='/css-example/ads-managers'> Ads Manager</Link></li>
                        <li><Link to='/css-example/card'> Card</Link></li>
                        <li><Link to='/css-example/login'> Login</Link></li>
                        <li><Link to='/css-example/modal'> Modal</Link></li>
                        <li><Link to='/css-example/userlist'> Userlist</Link></li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}
