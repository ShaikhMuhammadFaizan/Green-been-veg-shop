import React, { Component } from 'react';
import { Button, Container, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

import ShopImg1 from './Assets/shopImage1.jpg'

import './Benefits.css';


class Benefits extends Component {
    render() {

        return (
            <Container className="benefits d-flex Col justify-content-between align-items-center">
                <div className="benefits-text-area">
                    <p className="heading-text">Clear value for your customer</p>
                    <p className="desc-text benefites-desc-text">Add a description of your offer and key benefits what it is and how it will helps your customer</p>

                    <div className="strong-points-benefits-section d-flex ">
                        <div className="strong-points-benefits-section-area d-flex">
                            <div className="strong-point-individual d-flex justify-content-start align-items-center">
                                <FontAwesomeIcon icon={faCheck} size="sm" color="#c4d384" />
                                <p className="strong-benefit-point-text">Strong Point 1</p>
                            </div>
                            <div className="strong-point-individual d-flex justify-content-start align-items-center">
                                <FontAwesomeIcon icon={faCheck} size="sm" color="#c4d384" />
                                <p className="strong-benefit-point-text">Strong Point 2</p>
                            </div>
                            <div className="strong-point-individual d-flex justify-content-start align-items-center">
                                <FontAwesomeIcon icon={faCheck} size="sm" color="#c4d384" />
                                <p className="strong-benefit-point-text">Strong Point 3</p>
                            </div>
                        </div>

                        <div className="strong-points-benefits-section-area d-flex">
                            <div className="strong-point-individual d-flex justify-content-start align-items-center">
                                <FontAwesomeIcon icon={faCheck} size="sm" color="#c4d384" />
                                <p className="strong-benefit-point-text">Strong Point 1</p>
                            </div>
                            <div className="strong-point-individual d-flex justify-content-start align-items-center">
                                <FontAwesomeIcon icon={faCheck} size="sm" color="#c4d384" />
                                <p className="strong-benefit-point-text">Strong Point 2</p>
                            </div>
                            <div className="strong-point-individual d-flex justify-content-start align-items-center">
                                <FontAwesomeIcon icon={faCheck} size="sm" color="#c4d384" />
                                <p className="strong-benefit-point-text">Strong Point 3</p>
                            </div>
                        </div>


                    </div>
                    <div className="but-now-area d-flex justify-content-between align-items-center">
                        <Button size="lg" className="buy-now-btn benefit-btn theme-green-color-text d-flex"> Buy it now </Button>
                        {/* <div className="follow-us d-flex"> */}
                            <a href="" className="follow-us-link">Follow us</a>
                            <div className="social-icons-col d-flex">
                                <a href=""><FontAwesomeIcon icon={faFacebookF} size="sm" color="#000000" /></a>
                                <a href=""><FontAwesomeIcon icon={faInstagram} size="sm" color="#000000" /></a>
                                <a href=""><FontAwesomeIcon icon={faYoutube} size="sm" color="#000000" /></a>
                            </div>
                        {/* </div> */}

                    </div>
                </div>

                <div>
                    <Image src={ShopImg1} className="benefits-image" fluid />

                </div>

            </Container>
        );
    }
}

export default Benefits;
