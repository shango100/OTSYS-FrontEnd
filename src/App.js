import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListCompanyComponent from './components/ListCompanyComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateCompanyComponent from './components/CreateCompanyComponent';
import UpdateCompanyComponent from './components/UpdateCompanyComponent';
import ViewCompanyComponent from './components/ViewCompanyComponent';

function App() {
    return (
        <div>
            <Router>
                <HeaderComponent />
                <div className="container">
                    <Switch>
                        <Route path = "/" exact component = {ListCompanyComponent}></Route>
                        <Route path = "/companies" component = {ListCompanyComponent}></Route>
                        <Route path = "/add-company/:id" component = {CreateCompanyComponent}></Route>
                        <Route path = "/view-company/:id" component = {ViewCompanyComponent}></Route>
                        {/* <Route path = "/update-company/:id" component = {UpdateCompanyComponent}></Route> */}
                    </Switch>
                </div>
                <FooterComponent />
            </Router>
        </div>

    );
}

export default App;
