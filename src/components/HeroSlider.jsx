import React from 'react'
import { Carousel } from '3d-react-carousal';
import demo from '../assets/Trails.png';
import Magnethik from '../assets/images/rarity/magnethik.png';
import Fire from '../assets/images/rarity/Fire.png';
import Compression from '../assets/images/rarity/compression.png';
import Air from '../assets/images/rarity/Air.png';
import Ethik from '../assets/images/rarity/Ethik.png';

export default function HeroSlider() {
    let slides = [
        <img style={{width:"200px"}} src={demo} alt="1" />,
        <img style={{width:"200px"}} src={Magnethik} alt="2" />,
        <img style={{width:"200px"}} src={Fire} alt="3" />,
        <img style={{width:"200px"}} src={Compression} alt="4" />,
        <img style={{width:"200px"}} src={Air} alt="5" />,
        <img style={{width:"200px"}} src={Ethik} alt="6" />];

    const callback = function (index) {
        console.log("callback", index);
    }
    return (
        <>
            <Carousel slides={slides} autoplay={true}  onSlideChange={callback}/>
        </>
    )
}
