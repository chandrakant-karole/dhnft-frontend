import React from 'react';
import { FaDiscord, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import logo from '../assets/logo.png'

export default function FooterCommon() {
    return <>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-4'>
                    <div className='brandDiv_bottom'>
                        <div className='brandDiv_bottomHead mb-4'>
                            <img src={logo} className="" width='100' />
                            <h2>Diamond Hand</h2>
                        </div>
                        <p style={{color:'#afafaf'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quas natus repellendus sint aperiam quaerat nostrum veniam aut? Earum corrupti repellat delectus debitis asperiores aliquid quidem dolor beatae doloremque neque! </p>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='brandDiv_bottomLink'>
                        <div className='bottom_linkDiv'>
                            <h4 className='mb-2'>Links</h4>
                            <ul>
                                <li><a href='/dht_token/#learn'>Learn</a></li>
                                <li><a href="/dht_token/#defi-nft">DeFi + NFTs</a></li>
                                <li><a href="/dht_token/#rarity">Rarity</a></li>
                                <li><a href="/dht_token/#team">Team</a></li>
                                <li><a href="/dht_token/#faqs">FAQ's</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='brandDiv_bottomSocial'>
                    <div className='bottom_socialLinkDiv'>
                            <h4 className='mb-2'>Social Links</h4>
                            <ul>
                                <li><a href='/'><FaFacebookF/> Facebook</a></li>
                                <li><a href="/"><FaDiscord/> Discord</a></li>
                                <li><a href="/"><FaInstagram/> Instagram</a></li>
                                <li><a href="/"><FaTwitter/> Twitter</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>;
}
