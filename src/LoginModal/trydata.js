<Button
onClick={() => {
  this.modalToggle();
}}
>
Show
</Button>
<Modal show={this.state.showModal}>
<Modal.Header>Head </Modal.Header>
<Modal.Body></Modal.Body>
<Modal.Footer>
  <Button
    onClick={() => {
      this.modalToggle();
    }}
  >
    Close
  </Button>
</Modal.Footer>
</Modal>