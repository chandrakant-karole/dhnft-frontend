import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { BsCheckCircleFill } from 'react-icons/bs'
import logo from '../assets/logo.png'

export default function VibeMap() {
    return (
        <>
            <section className='vibeMap_section' id='map'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='vibeMap_head'>
                                <h2>Vibe Map</h2>
                            </div>
                        </Col>
                    </Row>
                    <Row className='my-4'>
                        <Col lg={4} className="my-4">
                            <div className='vibe_phaseDiv'>
                                <h6>october 2021</h6>
                                <h4>Launch & Sell Out</h4>
                                <p>(completed within 2 hrs of sale)</p>
                                <div className='vibe_site_logo'>
                                    <Image src={logo} fluid />
                                </div>
                                <div className='vibe_status_div'><BsCheckCircleFill /> </div>
                            </div>
                        </Col>
                        <Col lg={4} className="my-4">
                            <div className='vibe_phaseDiv'>
                                <h6>october 2021</h6>
                                <h4>CryptoPunk 3557</h4>
                                <p>fractions of CryptoPunk 3557 were airdropped to collectors of our NFT</p>
                                <div className='vibe_site_logo'>
                                    <Image src={logo} fluid />
                                </div>
                                <div className='vibe_status_div'><BsCheckCircleFill /> </div>
                            </div>
                        </Col>
                        <Col lg={4} className="my-4">
                            <div className='vibe_phaseDiv'>
                                <h6>November 2021</h6>
                                <h4>NFT NYC</h4>
                                <p>The Diamond Hands featured by Justin Gilanyi @Jsut_in#0183 at NFT NYC Broadway.</p>
                                <div className='vibe_site_logo'>
                                    <Image src={logo} fluid />
                                </div>
                                <div className='vibe_status_div'><BsCheckCircleFill /> </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className='my-4'>
                        <Col lg={4} className="my-4">
                            <div className='vibe_phaseDiv'>
                                <h6>Live Now</h6>
                                <h4>Launch $GVO Token</h4>
                                <p>Vibe-Listed for Good Vibes DAO NFT Only 250 Created</p>
                                <div className='vibe_site_logo'>
                                    <Image src={logo} fluid />
                                </div>
                                <div className='vibe_status_div'><BsCheckCircleFill /> </div>
                            </div>
                        </Col>
                        <Col lg={4} className="my-4">
                            <div className='vibe_phaseDiv'>
                                <h6>Live Now</h6>
                                <h4>Mint your Good Vibes DAO NFT</h4>
                                <p>Vibe-Listed for Good Vibes DAO NFT ONLY 250 Created</p>
                                <div className='vibe_site_logo'>
                                    <Image src={logo} fluid />
                                </div>
                                <div className='vibe_status_div'><BsCheckCircleFill /> </div>
                            </div>
                        </Col>
                        <Col lg={4} className="my-4">
                            <div className='vibe_phaseDiv'>
                                <h6>April 2022</h6>
                                <h4>Vibe-Listed</h4>
                                <p>Vibe-Listed for Good Vibes DAO NFT ONLY 250 Created</p>
                                <div className='vibe_site_logo'>
                                    <Image src={logo} fluid />
                                </div>
                                <div className='vibe_status_div'><BsCheckCircleFill /> </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className='my-4'>
                        <Col lg={4} className="my-4">
                            <div className='vibe_phaseDiv'>
                                <h6>Coming Soon</h6>
                                <h4>Incubator Launch</h4>
                                <p>Vibe-Listed for Good Vibes DAO NFT Only 250 Created</p>
                                <div className='vibe_site_logo'>
                                    <Image src={logo} fluid />
                                </div>
                                {/* <div className='vibe_status_div'><BsCheckCircleFill /> </div> */}
                            </div>
                        </Col>
                        <Col lg={4} className="my-4">
                            <div className='vibe_phaseDiv'>
                                <h6>Coming Soon</h6>
                                <h4>AR/VR 3D Assets</h4>
                                <p>Vibe-Listed for Good Vibes DAO NFT Only 250 Created</p>
                                <div className='vibe_site_logo'>
                                    <Image src={logo} fluid />
                                </div>
                                {/* <div className='vibe_status_div'><BsCheckCircleFill /> </div> */}
                            </div>
                        </Col>
                        <Col lg={4} className="my-4">
                            <div className='vibe_phaseDiv'>
                                <h6>Coming Soon</h6>
                                <h4>Diamond Hands Shop</h4>
                                <p>Vibe-Listed for Good Vibes DAO NFT Only 250 Created</p>
                                <div className='vibe_site_logo'>
                                    <Image src={logo} fluid />
                                </div>
                                {/* <div className='vibe_status_div'><BsCheckCircleFill /> </div> */}
                            </div>
                        </Col>
                    </Row>
                    <Row className='my-4'>
                        <Col lg={4} className="my-4">
                            <div className='vibe_phaseDiv'>
                                <h6>Coming Soon</h6>
                                <h4>Partnership</h4>
                                <p>Vibe-Listed for Good Vibes DAO NFT Only 250 Created</p>
                                <div className='vibe_site_logo'>
                                    <Image src={logo} fluid />
                                </div>
                                {/* <div className='vibe_status_div'><BsCheckCircleFill /> </div> */}
                            </div>
                        </Col>
                        <Col lg={4} className="my-4">
                            <div className='vibe_phaseDiv'>
                                <h6>Coming Soon</h6>
                                <h4>New DH NFT</h4>
                                <p>Vibe-Listed for Good Vibes DAO NFT Only 250 Created</p>
                                <div className='vibe_site_logo'>
                                    <Image src={logo} fluid />
                                </div>
                                {/* <div className='vibe_status_div'><BsCheckCircleFill /> </div> */}
                            </div>
                        </Col>
                        <Col lg={4} className="my-4">
                            <div className='vibe_phaseDiv'>
                                <h6>Coming Soon</h6>
                                <h4>Metaverse / IRL Events</h4>
                                <p>Vibe-Listed for Good Vibes DAO NFT Only 250 Created</p>
                                <div className='vibe_site_logo'>
                                    <Image src={logo} fluid />
                                </div>
                                {/* <div className='vibe_status_div'><BsCheckCircleFill /> </div> */}
                            </div>
                        </Col>
                    </Row>
                    <Row className='my-4'>
                        <Col lg={4} className="my-4">
                            <div className='vibe_phaseDiv'>
                                <h6>Coming Soon</h6>
                                <h4>Building into the future</h4>
                                <p>Vibe-Listed for Good Vibes DAO NFT Only 250 Created</p>
                                <div className='vibe_site_logo'>
                                    <Image src={logo} fluid />
                                </div>
                                {/* <div className='vibe_status_div'><BsCheckCircleFill /> </div> */}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
