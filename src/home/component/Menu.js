import React from 'react'
import {
    Link,
    Route,
    useRouteMatch
} from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
export default function Menu({ menuStatus }) {
    let match = useRouteMatch()

    return (
        <div className="menu">
            <span onClick={() => {
                menuStatus({ isOpen: false });
            }} className="close-menu  right-boxed">
                <i className="fa fa-times-circle" aria-hidden="true"></i>
            </span>
            <Tabs>
                <div className="menu-lang right-boxed">
                    <TabList>
                        <Tab><span>App</span></Tab>
                        <Tab><span>CSS</span></Tab>
                        <Tab><span>Links</span></Tab>


                    </TabList>
                </div>
                <TabPanel>
                    <ul className="menu-list right-boxed">
                        <li><Link to={`/projects/app/corona`}>Corona Virus Tracker</Link></li>
                        <li><Link to={`/projects/app/expense-tcr`}> Expense Tracker</Link></li>
                        <li><Link to={`/projects/app/lovecalculator`}> Love Calculator</Link></li>
                    </ul>
                </TabPanel>
                <TabPanel>
                    <ul className="menu-list right-boxed">
                        <li><Link to={`/projects/css-example/ads-managers`}> Ads Manager</Link></li>
                        <li><Link to={`/projects/css-example/card`}> Card</Link></li>
                        <li><Link to={`/projects/css-example/login`}> Login</Link></li>
                        <li><Link to={`/projects/css-example/modal`}> Modal</Link></li>
                        <li><Link to={`/projects/css-example/userlist`}> Userlist</Link></li>
                    </ul>
                </TabPanel>
                <TabPanel>
                    <ul className="menu-list right-boxed">
                        <li>
                            <a target="_blank" href="http://linkbookapp.herokuapp.com/#!/">LinkBook</a>
                        </li>
                        <li>
                            <a target="_blank" href="https://friends.netlify.app/#/login">Friendlist</a>
                        </li>
                        <li>
                            <a target="_blank" href="https://dreamy-hermann-9ffc9f.netlify.app/">Anjam masud</a>
                        </li>
                    </ul>
                </TabPanel>

            </Tabs>
            <div className="menu-footer right-boxed">
                <div className="social-list">
                    <a href="https://twitter.com/Imran__mh" target="_blank" className="icon ion-social-twitter"></a>
                    <a href="https://www.facebook.com/people/Imran-Hossain/100005169279775" target="_blank" className="icon ion-social-facebook"></a>
                    {/* <a href="#" target="_blank" className="icon ion-social-googleplus"></a> */}
                    <a href="https://www.linkedin.com/in/imranmh/" target="_blank" className="icon ion-social-linkedin"></a>
                    <a href="https://github.com/ImranMH" target="_blank" className="icon ion-social-github"></a>
                </div>
                <div className="copy" > © Jonny 2017. All Rights Reseverd <br /> Design by LoganCee </div>
            </div>
        </div>
    )
}
