import React, { Component } from 'react';
import { Container, Image, Row } from 'react-bootstrap';
import './StrongPoint.css';

import StrongpointImg1 from './Assets/veg1.png'

class Strongpoint extends Component {
    render() {

        return (
            <Container className="strong-point">
                <p className="heading-text">Clear value for your customer</p>
                <p className="sub-text">How will your product will change your customer's life</p>

                <div className="strong-points-area ">
                   
                    <div className="d-flex justify-content-center align-items-center strong-point-section">
                        <Image className="strong-point-image" src={StrongpointImg1} />
                        <p className="point-heading-text">Strong Point 01</p>
                        <p className="point-desc-text">A supporting statement for your value proposition to encourage customers to complete your CTA</p>
                    </div>
                    <div className="d-flex justify-content-center align-items-center strong-point-section">
                        <Image className="strong-point-image" src={StrongpointImg1} />
                        <p className="point-heading-text">Strong Point 01</p>
                        <p className="point-desc-text">A supporting statement for your value proposition to encourage customers to complete your CTA</p>
                    </div>
                    <div className="d-flex justify-content-center align-items-center strong-point-section">
                        <Image className="strong-point-image" src={StrongpointImg1} />
                        <p className="point-heading-text">Strong Point 01</p>
                        <p className="point-desc-text">A supporting statement for your value proposition to encourage customers to complete your CTA</p>
                    
                    </div>
                </div>

            </Container>
        );
    }
}

export default Strongpoint;
