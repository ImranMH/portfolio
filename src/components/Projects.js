import React, { useState } from 'react'
import {
    Switch,
    Route,
    useRouteMatch,
    useParams
} from "react-router-dom";
import classnames from 'classnames';
import Menu from '../home/component/Menu'
import Header from '../home/component/Header'
import Footer from './footer/Footer'
import { ExpenseTracker, LoveCalculator, Corona } from './app'
import Contact from '../contact/Index.js'
import { AdsManager, Card, Login, Modal, UserList } from './css-examples'


export default function Projects(props) {
    const [isOpen, setIsopen] = useState(false)
    const handleMenuClickEvent = (data) => {
        setIsopen(data.isOpen)
    }
    let match = useRouteMatch();
    console.log(match)
    return (
        <div className={classnames("body-full-page", "project_bg", isOpen ? 'menu-is-opened' : 'menu-is-closed')} >
            <div>
                <Menu menuStatus={handleMenuClickEvent} />
                <div onClick={() => {
                    setIsopen(false)
                }} className="click-capture"></div>
                <Header menuStatus={handleMenuClickEvent} />
            </div>
            <div className="Project_contyainer">
                <Switch>
                    <Route path={`${match.path}/app/corona`}>
                        <Corona />
                    </Route>
                    <Route path={`${match.path}/app/expense-tcr`}>
                        <ExpenseTracker />
                    </Route>
                    <Route path={`${match.path}/app/lovecalculator`}>
                        <LoveCalculator />
                    </Route>
                    <Route path={`${match.path}/contact`}>
                        <Contact />
                    </Route>
                    <Route path={`${match.path}/css-example/ads-managers`}>
                        <AdsManager />
                    </Route>
                    <Route path={`${match.path}/css-example/card`}>
                        <Card />
                    </Route>
                    <Route path={`${match.path}/css-example/login`}>
                        <Login />
                    </Route>
                    <Route path={`${match.path}/css-example/modal`}>
                        <Modal />
                    </Route>
                    <Route path={`${match.path}/css-example/userlist`}>
                        <UserList />
                    </Route>
                </Switch>
            </div>

            <Footer />
        </div>
    )
}
