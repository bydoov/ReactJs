import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import {Navbar,Nav} from 'react-bootstrap'

export class Navigation extends Component
{
    render(){
return(
<Navbar bg="dark" expand="lg">
<Navbar.Toggle aria-controls="basic-navbar-nav"/>


<NavLink className="d-inline  p-3 bg-dark text-white" to="/">Home</NavLink>
<NavLink className="d-inline  p-3 bg-dark text-white" to="/department">Department</NavLink>
<NavLink className="d-inline   p-3 bg-dark text-white" to="/employee">Employee</NavLink>
<NavLink className="d-inline   p-3 bg-dark text-white" to="/lists">List</NavLink>


</Navbar>
)
    }
}

export default Navigation;

