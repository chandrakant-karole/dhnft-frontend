import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import demo from '../assets/Trails.png';

export default function OurStory() {
    return (
        <>
            <section className='our_story_section' id='ourStory'>
                <Container>
                    <Row>
                        <Col lg={3} md={3} sm={12}>
                            <div className="our_story_img">
                                <Image src={demo} fluid />
                            </div>
                        </Col>
                        <Col lg={9} md={9} sm={12}>
                            <div className='our_story_content_container'>
                                <div className="our_story_contentDiv">
                                    <h2>Our Story</h2>
                                    <p>On October 2nd, 2021 Diamond Hands launched th first 3D collectible rendered in 3K on the Ethereum Blockchain as a premium Art Collective. Diamond Hands artwork was created by renowned, SuperRare artist, Yanis George </p>
                                    <p>As a display of the possibilities using today's blockchain technology, fractions of CryptoPunk 3557 were airdropped to collectors of our NFT. We will continue to explore new Web3 and Blockchain tech as we look to continue to accumulate more "1st" in the space. Our collective plans to apply creative innovations within DeFi to add and disseminate value to our community in a new and exciting way.</p>
                                    <b>Expect to use $GVO as utility within and beyond our ecosystem.</b>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
