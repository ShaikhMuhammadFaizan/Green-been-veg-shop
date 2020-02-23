import React, { Component } from 'react';
import { Container, Image } from 'react-bootstrap';
import ShopImg1 from './Assets/shopImage3.jpg'
import ShopImg2 from './Assets/shopImage4.jpg'

import './AboutShop.css';

class Aboutshop extends Component {
    render() {

        return (
            <Container className="about-shop">
                <div className="about-shop-images-area d-flex justify-content-between">
                    <Image className="about-shop-image" src={ShopImg1} />
                    <Image className="about-shop-image" src={ShopImg1} />
                </div>
                <div className="about-shop-description-area">
                    <div className="about-shop-description text-left">
                        <p className="about-heading-text">About <br />Our Vegan Shop</p>
                        <p className="about-desc-text">Vegetables are parts of plants that are consumed by humans or other animals as food. 
                        The original meaning is still commonly used and is applied to plants</p>

                        <p className="about-desc-text">Vegetables are parts of plants that are consumed by humans or other animals as food. 
                        The original meaning is still commonly used and is applied to plants collectively to refer to all edible plant matter</p>

                        <p className="about-desc-text">including the flowers, fruits, stems, leaves, roots, and seeds</p>

                    </div>
                </div>
            </Container>
        );
    }
}

export default Aboutshop;
