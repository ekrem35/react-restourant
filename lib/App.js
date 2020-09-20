import React from 'react'
import './App.css'
import Screens from './screens'
import { Card } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

function Header () {
  return /* #__PURE__ */React.createElement('div', {
    className: 'd-flex justify-content-center w-100 p-3',
    style: {
      backgroundColor: '#000'
    }
  }, /* #__PURE__ */React.createElement(Card.Img, {
    variant: 'top',
    style: {
      width: 340,
      height: null
    },
    src: require('../src/screens/Main/images/logo.jpg')
  }))
}

function App () {
  return /* #__PURE__ */React.createElement(React.Fragment, null, /* #__PURE__ */React.createElement(Header, null), /* #__PURE__ */React.createElement(Router, null, /* #__PURE__ */React.createElement(Switch, null, /* #__PURE__ */React.createElement(Route, {
    exact: true,
    path: '/',
    component: Screens.Main
  }), /* #__PURE__ */React.createElement(Route, {
    exact: true,
    path: '/menu',
    component: Screens.Menu
  }))))
}

export default App
