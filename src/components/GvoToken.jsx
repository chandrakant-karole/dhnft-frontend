import React from 'react'
import { Image } from 'react-bootstrap'
import logo from '../assets/logo.png';
import person from '../assets/unnamed-1.png';
export default function GvoToken() {
    return (
        <>
            <section className='gvo_token_section'>
                <div className="gvo_top_strip_bar">
                    <div><Image src={logo} fluid className='site_logo'/></div>
                    <div><Image src={person} fluid className='gvo_strip_person_img' /></div>
                    <div className='gvo_strip_para'>
                        <p>We are proud to be <b>the first DeFi NFT project</b> that air-dropped a punk to the community. <b>Join the DAO</b>... become part of our community. <b> GOOD VIBES ONLY !</b></p>
                    </div>
                </div>
            </section>
        </>
    )
}
