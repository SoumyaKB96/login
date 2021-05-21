import React from "react";
import { Button, Modal } from "react-bootstrap";

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  modalToggle() {
    this.setState({ showModal: !this.state.showModal });
  }
  render() {
    return <div></div>;
  }
}

export default LoginModal;
