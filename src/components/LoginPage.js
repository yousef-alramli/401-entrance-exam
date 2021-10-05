import React, { Component } from 'react'
import {
    Card
} from 'react-bootstrap'
import LoginButton from './LoginButton'
class LoginPage extends Component {
    render() {
        return (
            <>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Log In</Card.Title>
                        <Card.Text>
                            Click on below buttom to log in.
                        </Card.Text>
                        <LoginButton/>
                    </Card.Body>
                </Card>
            </>
        )
    }
}

export default LoginPage
