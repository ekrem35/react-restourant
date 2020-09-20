import React from 'react'
import './App.css'
import Screens from './screens'
import { Card, Button } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { connect } from 'react-redux'
import { deleteItem, updateItem, addItem, deleteAll } from './redux/actions'

type Props = { basketState: Array, deleteAll: Function }

function Header() {
  return (
    <div className="d-flex justify-content-center w-100 p-3 position-fixed" style={{ backgroundColor: '#000', zIndex: 9999 }}>
      <Card.Img variant="top" style={{ width: 200, height: null }} src={require('../src/screens/Main/images/logo.jpg')} />
    </div>
  )
}

function Basket(props: { basketState: Array, deleteAll: Function }) {
  if (props.basketState.length) {
    const menuPrice = props.basketState[0].mainPrice
    let total = 0
    return <div className="container" style={{ maxWidth: '30em' }}>
      {props.basketState.map((item, index) => {
        if (item.price) {
          total += parseFloat(item.price)
        }
        return (
          <Card key={String(index)} style={{backgroundColor: index % 2 === 0 ? '#fff' : '#eee', padding: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
            <Card.Text>{item.name}</Card.Text>
            <Card.Text>{item.price}</Card.Text>
          </Card>)
      })}
      {total ? <p>Toplam {(total).toFixed(2)}</p> : null}
      {menuPrice ? <p>Menü fiyatı {Number(menuPrice).toFixed(2)}</p> : null}
      {total && (menuPrice) ? <p>Genel Toplam {Number(menuPrice + total).toFixed(2)}</p> : null}
      <Button onClick={() => props.deleteAll()}>Sepeti Boşalt</Button>

    </div>
  }
  return null
}

function App(props: Props) {
  return (
    <>
      <Header />
      <div style={{ paddingBottom: 140 }}></div>
      <div className="d-flex flex-2">
        <div className="container">
          <Router>
            <Switch>
              <Route exact path="/" component={Screens.Main} />
              <Route exact path="/menu" component={Screens.Menu} />
              <Route exact path="/menu/sub" component={Screens.SubMenu} />
            </Switch>
          </Router>
        </div>
        <Basket basketState={props.basketState} deleteAll={() => props.deleteAll()} />
      </div>
      <div style={{ paddingBottom: 40 }}></div>
    </>
  )
}

const mapStateToProps = state => ({
  basketState: state.basket
})

const mapDispatchToProps = dispatch => ({
  add: (item) => dispatch(addItem(item)),
  update: (item, index) => dispatch(updateItem(item, index)),
  delete: (index) => dispatch(deleteItem(index)),
  deleteAll: () => dispatch(deleteAll())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
