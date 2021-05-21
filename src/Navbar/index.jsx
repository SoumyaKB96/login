import React from "react";
import LoginModal from "../LoginModal";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  render() {
    return (
      <div>
        <nav class="navbar navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand">Navbar</a>
            <form class="d-flex">
              <a class="navbar-brand">Register</a>
            </form>
          </div>
        </nav>
        <LoginModal show={this.state.showModal} />
      </div>
    );
  }
}

export default Navbar;
