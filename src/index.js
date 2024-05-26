import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Product from './views/product'
import PersonalAccountOrders from './views/personal-account-orders'
import Feedback from './views/feedback'
import Checkout from './views/checkout'
import PersonalAccount from './views/personal-account'
import Katalog from './views/katalog'
import Cart from './views/cart'
import Home from './views/home'
import Kategory from './views/kategory'
import HomeUnauth from './views/home-unauth'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Product} exact path="/product" />
        <Route
          component={PersonalAccountOrders}
          exact
          path="/personal-account-orders"
        />
        <Route component={Feedback} exact path="/feedback" />
        <Route component={Checkout} exact path="/checkout" />
        <Route component={PersonalAccount} exact path="/personal-account" />
        <Route component={Katalog} exact path="/katalog" />
        <Route component={Cart} exact path="/cart" />
        <Route component={Home} exact path="/" />
        <Route component={Kategory} exact path="/kategory" />
        <Route component={HomeUnauth} exact path="/home-unauth" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
