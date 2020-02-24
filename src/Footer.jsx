import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './Footer.css';

class Footer extends Component {
    render() {

        return (
            <div className="footer Col d-flex">
                <p className="footer-text">Stay updated!</p>
                    <Form.Control className="email-input" type="email" placeholder="Enter email" md="4"/>
                <Button size="md" className="buy-now-btn subscribe-btn theme-green-color-text"> Subscribe </Button>
            </div>
        );
    }
}

export default Footer;
