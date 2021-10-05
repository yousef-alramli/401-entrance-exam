import React, { Component } from 'react'
import axios from 'axios'
import {
    Col,
    Card,
    Button
} from 'react-bootstrap'
import { withAuth0 } from '@auth0/auth0-react'
import UpdateForm from './UpdateForm'
class Fav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            favData: [],
            showForm: false,
            id: '',
            image_url: '',
            title: '',
            description: '',
            toUSD: ''
        }
    }
    componentDidMount = async () => {
        const config = {
            method: "GET",
            url: `${process.env.REACT_APP_BACKEND}/fav`
        }
        await axios(config).then(res => {
            let watchData = res.data
            let filtered = watchData.filter(item => item.userEmail === this.props.auth0.user.email)
            this.setState({
                favData: filtered
            })
        })
    }

    handleDeleteFav = (id) => {
        const config = {
            method: "DELETE",
            url: `${process.env.REACT_APP_BACKEND}/deleteFav/${id}`
        }
        axios(config).then(res => {
            let watchData = res.data
            let filtered = watchData.filter(item => item.userEmail === this.props.auth0.user.email)
            this.setState({
                favData: filtered
            })
        })
    }

    handleShowForm = (id) => {
        this.setState({
            id: id,
            showForm: true
        })
    }
handleCloseForm = () =>{
    this.setState({
        showForm: false
    })
}
    handleUpdateFav = async (e) => {
        e.preventDefault();
        const config = {
            method: "PUT",
            url: `${process.env.REACT_APP_BACKEND}/updateFav/${this.state.id}`,
            data: {
                title: e.target.name.value,
                description: e.target.description.value,
                toUSD: e.target.toUSD.value,
                image_url: e.target.image_url.value,
                userEmail:this.props.auth0.user.email
            }
        }
       await axios(config).then(res => {
        let watchData = res.data
        let filtered = watchData.filter(item => item.userEmail === this.props.auth0.user.email)    
        this.setState({
                favData: filtered,
                showForm: false
            })
            console.log(res.data);
        })
    }

    render() {
        return (<>
            <h2>Home page</h2>
            <div className="row">
                {this.state.favData !== [] &&
                    this.state.favData.map(item => {
                        return (
                            <Col>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={item.image_url} />
                                    <Card.Body>
                                        <Card.Title>Name: {item.title}</Card.Title>
                                        <Card.Text>
                                            {item.description}
                                        </Card.Text>
                                        <Card.Text>
                                            price: {item.toUSD} $
                                        </Card.Text>
                                        <Button onClick={() => this.handleDeleteFav(item._id)} variant="danger">Delete</Button>
                                        <Button onClick={() => this.handleShowForm(item._id)} variant="info">Update</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )

                    })

                }
                <UpdateForm showForm={this.state.showForm}
                handleUpdateFav={this.handleUpdateFav}
                handleCloseForm={this.handleCloseForm} />
            </div>
        </>
        )
    }
}

export default withAuth0(Fav)
