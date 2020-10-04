import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import { Nav, NavItem, NavLink } from 'reactstrap';
import PrivateRoute from './components/PrivateRoute'
import Login from './components/Login'

const App = () => {

  return (
    <div className="App">
      <Nav>
        <NavItem>
          <NavLink href='/login'>Login</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/protected">Protected</NavLink>
        </NavItem>
      </Nav>
      <Switch>
        {/*<PrivateRoute exact path='/friends' component={Friends} />*/}
        <Route path='/login' component={Login} />
        <Route component={Login} />
      </Switch>
    </div>
  );

}

export default App;
