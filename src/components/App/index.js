import React from 'react'
import Layout from '../Layout'
import Login from '../containers/Login'
import Profile from '../containers/Profile'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export default function App() {



    return (
        <Layout>
            <Router>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/profile" component={Profile} />
                </Switch>
            </Router>
        </Layout>
    )
}