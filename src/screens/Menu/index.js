/**
 * @flow
 */
import React from 'react'
import { Card, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'
import { useHistory } from 'react-router-dom'

type Props = {
  location: {
    state: {
      dataSource: Array,
      caption: String
    }
  }
}


function Menu (props: Props) {
  const history = useHistory()
  const menus = props.location.state.dataSource
  const caption = props.location.state.caption
  return (
    <>
      <div style={{ height: 20 }}></div>
      <div className="container">
        <div>
            <a onClick={() => history.goBack()} className="menu">Geri Dön</a>
            <p className="display-4">{caption}</p>
        </div>
        <div className="d-flex flex-wrap justify-content-center">
          {menus.map((item, index) =>
            <Card key={index} style={{ width: '18rem', margin: 10 }} className="mx-auto">
              <Card.Img variant="top" src={require('../Main' + item.image.replace('.', ''))} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>Bu ürünü seçerek siparişinize devam edin</Card.Text>
                <Button variant="primary" onClick={() => console.log(item)}>Menüyü seç</Button>
              </Card.Body>
            </Card>)}
        </div>
      </div>
    </>
  )
}

export default Menu
