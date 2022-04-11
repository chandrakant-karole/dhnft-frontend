import React from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'
import Rewards from './Rewards'
import GVO from '../assets/$GVO-Token.png'
import Metamask from '../assets/metamask.png'
export default function DHFRewards() {
    return (
        <>
            <section className='DHF_Rewards_section'>
                <Rewards />
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="DHF_reward_Head">
                                <Image src={GVO} fluid />
                                <button> <Image src={Metamask} fluid /> Add $GVO</button>
                                <p>Click to Automatically Add <b>$GVO</b> Token to your wallet</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <div className="DHF_rewards_to_collect_div">
                                <h2>Rewards to Collect</h2>
                                <div className='DHF_rewards_inputDiv'>
                                    <input type="text" />
                                    <button className='max_btn'>Max</button>
                                    <button className='collect_btn'>Collect</button>
                                </div>
                                <ul>
                                    <li>
                                        <div>$GVO Tokens</div>
                                        <div>0.0</div>
                                    </li>
                                    <li>
                                        <div>Collected to Date</div>
                                        <div>0.0</div>
                                    </li>
                                    <li>
                                        <div>Diamond Hands</div>
                                        <div>0.0</div>
                                    </li>
                                </ul>
                                <hr />
                                <div className='DHF_GVO_img_bottom'>
                                    <Image src={GVO} fluid />
                                </div>
                                <ul>
                                    <li>
                                        <div>$GVO Available to Collect</div>
                                        <div>0.0</div>
                                    </li>
                                </ul>
                            </div>
                            <button className='DHF_liquidity_pool'>V2 Liquidity Pool</button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
