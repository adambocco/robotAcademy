import React from 'react';
import './App.css';
import setAuthToken from './utils/setAuthToken';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/routing/PrivateRoute'
import Home from './components/pages/Home'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import LandingPage from './components/pages/LandingPage'
import Navbar from './components/partials/Navbar'
import Alerts from './components/partials/Alerts'


if(localStorage.token){
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <>
   <Router>
   <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
   <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" crossorigin="anonymous"></link>
   <Navbar />
     <div className="container">
     <Alerts />
      <Switch>
        <Route exact path='/' component={LandingPage}/>
        <PrivateRoute exact path='/home' component={Home}/>
        <Route exact path='/register' component={Register}/>
        <Route exact path='/login' component={Login}/>
      </Switch>
     </div>     
   </Router>
   </>
  );
}

export default App;
