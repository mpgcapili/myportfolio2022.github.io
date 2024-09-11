import React from 'react'
import { P, Image } from '../../projectformats/Formats'

import aki from "../../Images/Artworks/aki.jpg"
import denji from "../../Images/Artworks/denji.jpeg"
import dp from "../../Images/Artworks/dp.jpeg"
import jett from "../../Images/Artworks/jett.jpg"
import kafka from "../../Images/Artworks/kafka.jpg"
import power from "../../Images/Artworks/power.jpg"
import woman from "../../Images/Artworks/woman.jpg"
import woman2 from "../../Images/Artworks/woman2.jpg"
import woman3 from "../../Images/Artworks/woman3.jpg"
import woman4 from "../../Images/Artworks/woman 4.jpg"
import woman5 from "../../Images/Artworks/woman 5.jpg"
import reyna from "../../Images/Artworks/reyna.jpg"

const PersonalArtwork = () => {
    return (
        <div className=''>
            <P>As I am passionate about my UI/UX career. I am also passionate on other creatives works. During my off time, you will find me making digital artwork.</P>
            <P>Drawing has been my safe space, this is my way for me to express the other side of creativity outside UI/UX</P>
            <P>Below are some of the artworks I did.</P>
            <div className='grid grid-cols-2 
            sm:grid-cols-3'>
                <Image classname="w-full" noGap={true} src={aki} alt="" />
                <Image classname="w-full" noGap={true} src={woman} alt="" />
                <Image classname="w-full" noGap={true} src={denji} alt="" />
                <Image classname="w-full" noGap={true} src={dp} alt="" />
                <Image classname="w-full" noGap={true} src={kafka} alt="" />
                <Image classname="w-full" noGap={true} src={power} alt="" />
                <Image classname="w-full" noGap={true} src={woman2} alt="" />
                <Image classname="w-full" noGap={true} src={woman3} alt="" />
                <Image classname="w-full" noGap={true} src={woman4} alt="" />
                <Image classname="w-full" noGap={true} src={woman5} alt="" />
                <Image classname="w-full" noGap={true} src={jett} alt="" />
                <Image classname="w-full" noGap={true} src={reyna} alt="" />
            </div>
            <br />
            <P>Just in case you want me to support me, you can follow me on IG: <a href="https://www.instagram.com/atotamashii/" target="_blank" rel="noopener noreferrer"> <b><u>@atotamashii</u></b></a> </P>


        </div>
    )
}

export default PersonalArtwork