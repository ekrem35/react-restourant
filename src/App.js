import React from 'react'
import './App.css'
import Screens from './screens'
import { Card } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

function Header () {
  return (
    <div className="d-flex justify-content-center w-100 p-3 position-fixed" style={{ backgroundColor: '#000', zIndex: 9999 }}>
      <Card.Img variant="top" style={{ width: 200, height: null }} src={require('../src/screens/Main/images/logo.jpg')} />
    </div>
  )
}

function App () {
  return (
    <>
      <Header />
      <div style={{ paddingBottom: 140 }}></div>
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={Screens.Main} />
            <Route exact path="/menu" component={Screens.Menu} />
            <Route exact path="/menu/sub" component={Screens.SubMenu} />
          </Switch>
        </Router>
      </div>
    </>
  )
}

export default App
