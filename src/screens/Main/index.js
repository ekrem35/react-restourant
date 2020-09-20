import React from 'react'
import YAML from 'yamljs'
import { Card, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'
import { useHistory } from 'react-router-dom'
const yamlFile = require('../../datasource/menu.yaml')
const yaml2json = YAML.load(yamlFile)

const main = yaml2json.menus.filter(item => item.key === 'main')[0]
const others = yaml2json.menus.filter(item => item.key !== 'main')

function Main () {
  const history = useHistory()
  return (
    <>
      <div style={{ height: 20 }}></div>
      <div>
        <p className="display-4">{main.description}</p>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {main.items.map((item, index) =>
          <Card key={index} style={{ width: '18rem', margin: 10 }} className="mx-auto">
            <Card.Img variant="top" src={require('' + item.image)} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>Bu menüyü seçerek siparişinize devam edin</Card.Text>
              <Button variant="primary" onClick={() => history.push({
                pathname: '/menu',
                state: { dataSource: item.items, caption: item.caption, others }
              })}>Menüyü seç</Button>
            </Card.Body>
          </Card>)}
      </div>
    </>
  )
}

export default Main
