import React from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { useHistory } from 'react-router-dom';

function Menu(props) {
  const history = useHistory();
  const menus = props.location.state.dataSource;
  const caption = props.location.state.caption;
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
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => history.goBack(),
    className: "menu"
  }, "Geri D\xF6n"), /*#__PURE__*/React.createElement("h1", {
    className: "display-4"
  }, caption))), /*#__PURE__*/React.createElement("div", {
    className: "d-flex flex-wrap justify-content-center"
  }, menus.map((item, index) => /*#__PURE__*/React.createElement(Card, {
    key: index,
    style: {
      width: '18rem',
      margin: 10
    },
    className: "mx-auto"
  }, /*#__PURE__*/React.createElement(Card.Img, {
    variant: "top",
    src: require('../Main' + item.image.replace('.', ''))
  }), /*#__PURE__*/React.createElement(Card.Body, null, /*#__PURE__*/React.createElement(Card.Title, null, item.name), /*#__PURE__*/React.createElement(Card.Text, null, "Bu men\xFCy\xFC se\xE7erek sipari\u015Finize devam edin"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "\xDCr\xFCn\xFC se\xE7")))))));
}

export default Menu;