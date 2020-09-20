/**
 * @flow
 */
import React from 'react'
import { Card, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteItem, updateItem, addItem, deleteAll } from '../../redux/actions'

type Props = {
  location: {
    state: {
      dataSource: Array,
      caption: String,
      others: Array
    },
  },
  add: (item: Object) => void,
  deleteAll: () => void
}

function Menu(props: Props) {
  const history = useHistory()
  const { dataSource: menus, caption, others } = props.location.state
  console.log(menus[0])
  return (
    <>
      <div>
        <a onClick={() => history.goBack()} className="menu-item">Geri Dön</a>
        <p className="display-4 align-self-flex-end">{caption}</p>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {menus.map((item, index) =>
          <Card key={index} style={{ width: '18rem', margin: 10 }} className="mx-auto">
            <Card.Img variant="top" src={require('../Main' + item.image.replace('.', ''))} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>Bu ürünü seçerek siparişinize devam edin</Card.Text>
              <Button variant="primary" onClick={() => {
                if (item.subMenus) {
                  const subMenuDataSource = []
                  item.subMenus.map(filterKey => {
                    subMenuDataSource.push(others.filter(iter => iter.key === filterKey)[0])
                  })
                  props.deleteAll()
                  history.push({
                    pathname: '/menu/sub', state:
                    {
                      dataSource: subMenuDataSource, selectedItem: item, others, mainPrice: item.price || 0
                    }
                  })
                } else {
                  props.add(item);
                }
              }}>Menüyü seç</Button>
            </Card.Body>
          </Card>)}
      </div>
    </>
  )
}


const mapDispatchToProps = dispatch => ({
  add: (item) => dispatch(addItem(item)),
  update: (item, index) => dispatch(updateItem(item, index)),
  delete: (index) => dispatch(deleteItem(index)),
  deleteAll: () => dispatch(deleteAll())
})

export default connect(undefined, mapDispatchToProps)(Menu)
