import React, { Component } from 'react';
import { Container, Image } from 'react-bootstrap';

import './OurProducts.css';

import Avocado1 from './Assets/avocado1.jpg'
import Tomato from './Assets/tomato2.jpg'
import Avocado2 from './Assets/avocado3.jpg'

class Ourproducts extends Component {
    render() {

        return (
            <Container className="our-products">
                <div className="our-products-heading">
                    <p className="heading-text">Our products</p>
                    <p className="desc-text benefites-desc-text">Add a description of your offer and key benefits <br /> what it is and how it will helps your customer</p>
                </div>

                <div className="product-desc d-flex">
                    <div className="product d-flex">
                        <Image className="product-img" src={Avocado1} />
                        <p className="product-name">Vegetarian Avocado</p>
                        <p className="product-price theme-green-color-text">$25.00</p>
                    </div>
                    <div className="product">
                        <Image className="product-img" src={Tomato} />
                        <p className="product-name">Vegetarian Tomato</p>
                        <p className="product-price theme-green-color-text">$25.00</p>
                    </div>
                    <div className="product">
                        <Image className="product-img" src={Avocado2} />
                        <p className="product-name">Vegetarian Avocado</p>
                        <p className="product-price theme-green-color-text">$25.00</p>
                    </div>
                </div>
            </Container>
        );
    }
}

export default Ourproducts;
