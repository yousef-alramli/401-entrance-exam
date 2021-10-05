import { withAuth0 } from '@auth0/auth0-react'
import axios from 'axios'
import React, { Component } from 'react'
import {
    Col,
    Card,
    Button
} from 'react-bootstrap'
export class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            watchesData: [],
        }
    }
    componentDidMount = async () => {
        const config = {
            method: "GET",
            url: `${process.env.REACT_APP_BACKEND}/watches`
        }
        await axios(config).then(res => {
            this.setState({
                watchesData: res.data
            })
        })
    }

    handleAddToFav = (image_url, title, description, toUSD) => {
        const config = {
            method: "POST",
            url: `${process.env.REACT_APP_BACKEND}/ceateFav`,
            data: {
                userEmail: this.props.auth0.user.email,
                title: title,
                description: description,
                toUSD: toUSD,
                image_url: image_url
            }
        }
        axios(config)
    }
    render() {
        return (<>
                <h2>Home page</h2>
            <div className="row">
                {this.state.watchesData !== [] &&
                    this.state.watchesData.map(item => {
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
                                        <Button onClick={() => this.handleAddToFav(item.image_url, item.title, item.description, item.toUSD)} variant="primary">Add to favorites</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )

                    })

                }
            </div>
            </>
        )
    }
}

export default withAuth0(HomePage)
