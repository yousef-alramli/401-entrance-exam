import React, { Component } from 'react'
import {
    Button,
    Modal,
    Form
} from 'react-bootstrap'

class UpdateForm extends Component {
    render() {
        return (
            <>
                <Modal show={this.props.showForm === true} onHide={this.props.handleCloseForm}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Informations</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Form onSubmit={(e) =>{this.props.handleUpdateFav(e)} }>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Name" name="name" required/>
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Image</Form.Label>
                                <Form.Control type="text" placeholder="Image" name="image_url" required/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>description</Form.Label>
                                <Form.Control type="text" placeholder="description" name="description" required/>
                            </Form.Group>
                     

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>price</Form.Label>
                                <Form.Control type="text" placeholder="price" name="toUSD" required/>
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Update
                            </Button>
                        </Form>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleCloseForm}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default UpdateForm
