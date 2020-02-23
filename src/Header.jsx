import React, { Component } from 'react';
import { Button, Container, Col } from 'react-bootstrap';

import './Header.css';

class Header extends Component {
    render() {

        return (
            <div className="color-text-white header d-flex align-self-end">
                <div className="header-elements d-flex align-self-end">
                    <p className="heading-text">We are a vegan shop</p>
                    <p className="sub-text">The best products for your health</p>
                    <p className="desc-text desc-text-mt">A supporting statement for your value proposition to encourage customers to complete your CTA</p>
                    <p className="product-cat-text">Vegeterian Cheese</p>
                    <p className="best-price-text">Best price <span className="price-text theme-green-color-text">$25.00</span></p>
                    <Button size="lg" className="buy-now-btn theme-green-color-text"> Buy it now </Button>
                </div>
            </div>
        );
    }
}

export default Header;
