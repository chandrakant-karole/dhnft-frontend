import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { FaTwitter, FaInstagram } from 'react-icons/fa'
import red from '../assets/download-2.png';
import visionary from '../assets/visionary.png';
import Driver from '../assets/Driver.png';
import Navigator from '../assets/unnamed-1.png';
import String from '../assets/stringblock.png';

export default function OurTeam() {
    return (
        <>
            <section className='our_team_section' id='team'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h2 className='ourTeam_Heading'>The Diamond Hands Team</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <div className="ourTeam_profile_div">
                                <div className='profile_div'>
                                    <div className='profile_card'>
                                        <Image src={red} fluid />
                                        <div className='profile_details'>
                                            <h6>The Artist</h6>
                                            <p>Yanis - ethikdesign</p>
                                            <div className='profile_social_link'>
                                                <FaTwitter />
                                                <FaInstagram />
                                            </div>
                                        </div>
                                    </div>
                                    <p className='profile_card_description'>
                                        French 3D Artist/Director Yanis Georges aka ethikdesign is known for his sleek abstract design and organic animations.
                                    </p>
                                </div>
                                <div className='profile_div'>
                                    <div className='profile_card'>
                                        <Image src={visionary} fluid />
                                        <div className='profile_details'>
                                            <h6>The Visionary</h6>
                                            <p>Blake</p>
                                            <div className='profile_social_link'>
                                                <FaTwitter />
                                                <FaInstagram />
                                            </div>
                                        </div>
                                    </div>
                                    <p className='profile_card_description'>
                                        Curator of some of the most premium NFT's on the market today.
                                    </p>
                                </div>
                                <div className='profile_div'>
                                    <div className='profile_card'>
                                        <Image src={Driver} fluid />
                                        <div className='profile_details'>
                                            <h6>The Driver</h6>
                                            <p>Dolphin Whale</p>
                                            <div className='profile_social_link'>
                                                <FaTwitter />
                                                <FaInstagram />
                                            </div>
                                        </div>
                                    </div>
                                    <p className='profile_card_description'>
                                        Sees around comers to predict market swings, curating some outstanding pieces.
                                    </p>
                                </div>
                                <div className='profile_div'>
                                    <div className='profile_card'>
                                        <Image src={Navigator} fluid />
                                        <div className='profile_details'>
                                            <h6>The Navigator</h6>
                                            <p>The Guy</p>
                                            <div className='profile_social_link'>
                                                <FaTwitter />
                                                <FaInstagram />
                                            </div>
                                        </div>
                                    </div>
                                    <p className='profile_card_description'>
                                        Multi-business owner and involved in tech for over a decade.
                                    </p>
                                </div>
                                <div className='profile_div'>
                                    <div className='profile_card'>
                                        <Image src={String} fluid />
                                        <div className='profile_details'>
                                            <h6>The Blockchain Guru's</h6>
                                            <p>StringBlock</p>
                                            <div className='profile_social_link'>
                                                <FaTwitter />
                                                <FaInstagram />
                                            </div>
                                        </div>
                                    </div>
                                    <p className='profile_card_description'>
                                        One of the best in the game when it comes to BlockChain. Accepting Early Incubator Applications.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
