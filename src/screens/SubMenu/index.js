/**
 * @flow
 */
import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useHistory } from 'react-router-dom'

type Props = {
    location: {
        state: {
            dataSource: Array,
            caption: String,
            selectedItem: Object,
            others: Array
        }
    }
}

function SubMenu (props: Props) {
  const { dataSource: menus, selectedItem } = props.location.state
  const [selected, setSelected] = useState(0)
  const history = useHistory()
  return (
    <>
      <div>
        <a onClick={() => history.goBack()} className="menu-item">Menü Seçimine Dön</a>
        <p className="display-4 align-self-flex-end">{selectedItem.name}</p>
      </div>
      {
        menus.map((item, index) => (
          <div key={String(index)} className="accordion" id="accordionExample">
            <div className="card">
              <div className="card-header" id="headingOne">
                <h5 className="mb-0">
                  <button onClick={() => {
                    setSelected(index)
                  }} className="btn btn-link" type="button" data-toggle="collapse" data-target={`#${item.key}`} aria-expanded="true" aria-controls="collapseOne">
                    {item.description}
                  </button>
                </h5>
              </div>

              <div id="collapseOne" className={`collapse${index === selected ? ' show' : ''}`} aria-labelledby="headingOne" data-parent="#accordionExample">
                <div className="card-body d-flex flex-wrap">
                  {
                    item.items.map((iter, index) => {
                      return (<Card key={index} style={{ width: '16rem', margin: 5 }} className="mx-auto">
                        <Card.Img variant="top" src={require('../Main' + iter.image.replace('.', ''))} />
                        <Card.Body>
                          <Card.Text>{iter.name}</Card.Text>
                          <Button variant="primary" onClick={() => {
                            return true
                          }}>+</Button>
                        </Card.Body>
                      </Card>)
                    })
                  }
                </div>
              </div>
            </div>
          </div>)
        )
      }
    </>
  )
}

export default SubMenu
