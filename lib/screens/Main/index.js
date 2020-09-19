import React from 'react';
import YAML from 'yamljs';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { useHistory } from 'react-router-dom';

const yamlFile = require('../../datasource/menu.yaml');

const main = YAML.load(yamlFile).menus.filter(item => item.key === 'main')[0];
console.log(YAML.load(yamlFile));

function Main() {
  const history = useHistory();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 20
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jumbotron jumbotron-fluid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "display-4"
  }, main.description))), /*#__PURE__*/React.createElement("div", {
    className: "d-flex flex-wrap justify-content-center"
  }, main.items.map((item, index) => /*#__PURE__*/React.createElement(Card, {
    key: index,
    style: {
      width: '18rem',
      margin: 10
    },
    className: "mx-auto"
  }, /*#__PURE__*/React.createElement(Card.Img, {
    variant: "top",
    src: require('' + item.image)
  }), /*#__PURE__*/React.createElement(Card.Body, null, /*#__PURE__*/React.createElement(Card.Title, null, item.name), /*#__PURE__*/React.createElement(Card.Text, null, "Bu men\xFCy\xFC se\xE7erek sipari\u015Finize devam edin"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => history.push({
      pathname: '/menu',
      state: {
        dataSource: item.items,
        caption: item.caption
      }
    })
  }, "Men\xFCy\xFC se\xE7")))))));
}

export default Main;