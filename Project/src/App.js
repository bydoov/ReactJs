import React from 'react';
import Navigation from './components/Navigation'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './components/Home'
import Employee from './components/Employee'
import Department from './components/Department'


import Button from 'react-bootstrap/Button'
import List from './components/List'


function App(){
      return (
      <BrowserRouter>
<div className="container">
<Navigation />
<Switch>
<Route exact path='/' component={Home}/>
<Route path='/department' component={Department}/>
<Route path='/employee' component={Employee}/>
<Route path='/lists' component={List}/>
</Switch>
</div>
</BrowserRouter>
    );
  }


export default App;