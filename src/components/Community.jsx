import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import {FaDiscord, FaTwitter} from 'react-icons/fa'
import rightArrow from '../assets/Layer_51.png';
import leftArrow from '../assets/Layer_51_copy.png';

export default function Community() {
    return (
        <>
            <section className='community_section'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='community_container'>
                                <div className='community_title_one'>
                                    <h2><span>Join</span> Our Dao</h2>
                                </div>
                                <div className='community_title_two'>
                                    <Image src={rightArrow} fluid/>
                                    <h2>Commit <span>8 Diamond Hands </span></h2>
                                </div>
                                <div className='community_title_three'>
                                    <Image src={leftArrow} fluid/>
                                </div>
                                <div className='community_title_four'>
                                    <h2>Receive Our <br /> <span>Good Vibes Dao Nft</span></h2>
                                </div>
                                <div className='community_title_five'>
                                    <Image src={rightArrow} fluid/>
                                    <h2>produce <br /> <span>11 $gvo tokens <br /> </span> daily for <span> 11 year </span></h2>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <div className='community_content'>
                                <h2>Community  +  Collectors  +  Course</h2>
                                <p>Humbled by some of the Greatest Collectors of All-Time and a strong core community, Diamond Hands NFT continues to build with the Diamond Hands mentality. After our successful launch, we continued our course to build upon an already great NFT. With this came the advent of our Treasury and the release of our $GVO Token and DAO (Decentralized Autonomous Organization).</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <div className="community_btn">
                                <button> <FaDiscord/> Join our Discord Server</button>
                                <button> <FaTwitter/> Join our Twitter page</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
