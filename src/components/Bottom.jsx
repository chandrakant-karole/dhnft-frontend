import React from 'react'
import { Image } from 'react-bootstrap'
import logo from '../assets/DH-logo-white.png'
export default function Bottom() {
    return (
        <>
            <section className='bottom_section'>
                <div className='bottom_image'>
                    <Image src={logo} fluid />
                </div>
                <div className='bottom_contentDiv'>
                    <h6>2022 Copyrights © thediamondhands.io - All rights reserved</h6>
                    <p>The Diamond Hands NFT, SGVO token is not an investment and has no financial value, nor does the Diamond Hands NFT make any claims that will earn you dividends on any of its</p>
                </div>
            </section>
        </>
    )
}


