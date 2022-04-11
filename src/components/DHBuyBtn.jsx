import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { BsCheckCircleFill } from 'react-icons/bs'
import Logo from '../assets/DH-logo-white.png'
export default function DHBuyBtn() {
    return (
        <>
            <section className='dhbuy_btn_sections'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='dhbuy_btn_container'>
                                <div className='dhbuy_btn_containerDiv'>
                                    <div className='dhbuy_site_logoDiv'>
                                        <Image src={Logo} fluid />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4} className="my-4">
                            <div className='dhbuy_btn_contentDiv'>
                                <div className='dhbuy_btn_content'>
                                    <h6>CRYPTOPUNK 3557</h6>
                                    <ul>
                                        <li><BsCheckCircleFill /> Liquidity Pool created for CryptoPunk 3557 and held in Good Vibes DAO</li>
                                        <li><BsCheckCircleFill /> Staking $LOOKS for Good Vibes DAO</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} className="my-4">
                            <div className='dhbuy_btn_contentDiv'>
                                <div className='dhbuy_btn_content'>
                                    <h6>ETH VALIDATOR NODE</h6>
                                    <ul>
                                        <li><BsCheckCircleFill /> ETH Validator Node providing growth to Good Vibes DAO</li>
                                        <li><BsCheckCircleFill /> ETH Validator Node Expansion Plans</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} className="my-4">
                            <div className='dhbuy_btn_contentDiv'>
                                <div className='dhbuy_btn_content'>
                                    <h6>EXCLUSIVE ACCESS</h6>
                                    <ul>
                                        <li><BsCheckCircleFill /> Membership Access Passes IRL |VR|AR</li>
                                        <li><BsCheckCircleFill /> VR and AR access in the Metaverse</li>
                                        <li><BsCheckCircleFill /> Access to WEB3 and Blockchain Incubator</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <div className='dhbuy_btn_Div'>
                            <button>Buy on OpenSea</button>
                            <button>Buy on LooksRare</button>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    )
}
