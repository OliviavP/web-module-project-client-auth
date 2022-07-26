import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link,
} from 'react-router-dom'
import Login from './components/Login'
import FriendsList from './components/FriendsList'
import AddFriend from './components/AddFriend'
import Logout from './components/Logout'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <Router>
      <div className='App'>
        <header>
          <h2>Friends Database</h2>
          <Link className='Link' to='/login'>
            Login
          </Link>
          <Link className='Link' to='/friends'>
            Friends List
          </Link>
          <Link className='Link' to='/friends/add'>
            Add Friends
          </Link>
          <Link className='Link' to='/logout'>
            Logout
          </Link>
        </header>
        <Route exact path='/'>
          <Login />
        </Route>
        <Route exact path='/login'>
          <Redirect to='/' />
        </Route>
        <PrivateRoute exact path='/friends' component={FriendsList} />

        <Route exact path='/friends/add'>
          <AddFriend />
        </Route>
        <Route exact path='/logout'>
          <Logout />
        </Route>
      </div>
    </Router>
  )
}

export default App
