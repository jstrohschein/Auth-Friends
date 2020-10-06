import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import { Nav, NavItem, NavLink } from 'reactstrap';
import PrivateRoute from './components/PrivateRoute'

//components
import Login from './components/Login'
import NewFriend from './components/NewFriend'
import Friends from './components/Friends'

const App = () => {

  return (
    <div className="App">

      <Nav className='nav'>
        <NavItem>
          <NavLink href='/login'>Login</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/friends">My Friends</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/newfriend">Add Friend</NavLink>
        </NavItem>
      </Nav>

      <Switch>
        <PrivateRoute exact path='/friends' component={Friends} />
        <Route path='/newfriend' component={NewFriend} />
        <Route path='/login' component={Login} />
        <Route component={Login} />
      </Switch>

    </div>
  );

}

export default App;
