import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import GVO from '../assets/$GVO-Token.png'
import GvoBenefit from '../assets/FOUNDER_DAO_.png'
export default function AboutGVO() {
    return (
        <>
            <section className='about_gvo_section'>
                <Container>
                    <Row>
                        <Col lg={8}>
                            <div className='about_gvo_contentDiv'>
                                <div className="about_gvo_content">
                                    <h2>WHAT IS $GVO TOKEN</h2>
                                    <p>SGVO or "Good Vibes Only is the Utility Token that fuels the Diamond Hands ecosystem; a combination of discounts on merch, minting future collections, exclusive access to Diamond Hand events, including Metaverse meet-ups, the ability to bid or mint on small-batch, limited edition 1/1 NFTs, bid on the ability to become part of our incubator program, future partnerships, and more.</p>
                                    <b>SGVO=1 $GVO</b> <br />
                                    <b>SGVO will always equal 1 $GVO. $GVO is primarily a "utility token" and should be viewed as such.</b>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="about_gvo_imgDiv">
                                <Image src={GVO} fluid />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <div className="about_gvo_benefit_divImg">
                                <Image src={GvoBenefit} fluid />
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div className='about_gvo_benefit_contentDiv_container'>
                                <div className='about_gvo_benefit_contentDiv'>
                                    <h3>BENEFITS OF "GOOD VIBES ONLY"</h3>
                                    <ul>
                                        <li>DeFi (Decentralized Finance)</li>
                                        <li>ETH Validator Node providing growth to Good Vibes DAO</li>
                                        <li>ETH Validator Node Expansion Plans</li>
                                        <li>Staking $LOOKS for Good Vibes DAO</li>
                                        <li>Liquidity Pool created for CryptoPunk 3557 and held in Good Vibes DAO</li>
                                        <li>Membership Access Passes IRL [VR | AR</li>
                                        <li>On-Ramp for Education and Outreach</li>
                                        <li>Access to WEB3 and Blockchain Incubator</li>
                                    </ul>
                                    <b>Did we mention... Good Vibes? Yeah - you get this too</b>
                                    <p>Token lization  &#62; Merchandise | Passes | Parties | ... More

                                        VR and AR access in the Metaverse</p>
                                    <button>Claim Rewards</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
