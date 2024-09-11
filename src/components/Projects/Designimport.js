import React, { useEffect, useState } from 'react'


import { H1, H2, H3, P, ImgSubtitle, Image } from '../../projectformats/Formats';
import { GrPrevious, GrNext } from "react-icons/gr";
import p1sol from "../../Images/Design Import/sol/p1sol.jpg"
import p2sol from "../../Images/Design Import/sol/p2sol.jpg"
import p3prob from "../../Images/Design Import/step8.jpg"
import p3sol from "../../Images/Design Import/sol/p3sol.jpg"

const ImageCarousel = (props) => {

    // console.log(img.height, img.width);
    const [index, setIndex] = useState(0);
    const images = props.images;
    const subtitles = props.subtitles;


    const handleNext = () => {
        setIndex(index + 1 === images.length ? 0 : index + 1)
    }
    const handlePrevious = () => {
        setIndex(index - 1 < 0 ? images.length - 1 : index - 1)
    }



    return (
        // ${props.carouselSize}
        <>
            <div className={`mb-4 ${props.carouselSize} flex justify-between items-center w-full  object-contain`}>
                <button className='w-12 h-full flex items-center justify-center' onClick={() => handlePrevious()}><GrPrevious /></button>
                <div className={` inline-grid grid-cols-1  justify-center items-center w-full h-full`}>
                    <Image src={images[index]} classname={`object-contain w-full  ${props.carouselSize}`} />

                </div>
                <button className='w-12 h-full flex items-center justify-center' onClick={() => handleNext()}><GrNext /></button>

            </div>
            <ImgSubtitle>{subtitles[index]}</ImgSubtitle>
        </>
    )
}

{/* <img src={images[index]} className={` ${props.height} object-contain `} alt="" /> */ }
const Designimport = () => {
    const finaldessub = ["Step 1: Getting Started"
        , "Step 2: Backend services setup"
        , "Step 3: Selecting API to fetch data"
        , "Step 4: Selecting Forms and fields"
        , "Step 5: Summary/Reviewing stage"
        , "Step 6: Result/Done"
    ]
    const finaldes = []
    for (let i = 0; i < 6; i++) {

        finaldes.push(require(`../../Images/Design Import/finaldesign/s${i + 1}.jpg`))
    }
    const currdessubtitle = ["Step 1: Getting Started"
        , "Step 2: Connect to backend Services."
        , "Step 3: Select existing API to get DATA"
        , "Step 4: Select available API from dropdown"
        , "Step 5: Login Authentication for API"
        , "Step 6: Allow consent to Use API"
        , "Step 7: Select Scope that contains data"
        , "Step 8: Select which forms, fields to include"
        , "Step 9: Review Summary"
        , "Step 10: Generate Forms"
        , "Step 11: Click Done to close wizard"
    ];
    const currdes = []
    for (let i = 0; i < 11; i++) {

        currdes.push(require(`../../Images/Design Import/step${i + 1}.jpg`))
    }

    return (

        <>
            <div>
                <div className="text-3xl font-bold">Design Import</div>
                <P>Wizard that converts old version projects to new version.</P>
                <P className='italic mb-5'>
                    Disclaimer:<br />
                    There is a lot of sensitive data so I will only show few of the design because of restriction.
                </P>
                <H1>Intro</H1>
                <P> Design Import is a wizard that converts the applications/project old version into new one. Just like transferring files from an old iPhone into New Android device.</P>


                <H1>Process</H1>
                <div className='flex flex-col gap-8 mb-10'>
                    <div className='getting-info'>
                        <H2>01 Getting Information</H2>
                        <P>Since it hasn’t been released to the public, I started getting information to the developers, luckily enough they are also my teammates.</P>
                        <p>I asked these main questions:</p>
                        <ul className='list-disc pl-6 mb-4'>
                            <li>What part of wizard annoys you?</li>
                            <li>What part of wizard you think needs improvement?</li>
                            <li>Any feature you think is nice to have?</li>
                        </ul>
                        <P>After getting all information, I organized them and prioritize which one should be tackled first.</P>
                    </div>
                    <div className='ideation-and-wireframe'>
                        <H2>02 Ideation and Wireframe</H2>
                        <P>After getting the information, I realized that the Design import wizard would take <b>10 STEPS</b> to finish the process. And that is a <b>LOT</b> of effort for the user just to finish 1 simple task.</P>
                        <P>So I remove any redundancies steps that doesn’t make any sense.</P>
                    </div>
                    <div className='feedback-testing-and-iteration'>
                        <H2>03 Feedback/Testing and Iteration</H2>
                        <P>This is where I spent time the most, because after my ideation, some of the steps I did is “not yet” technically possible or some of the steps I remove is actually needed.</P>
                        <P>So the next question I thought of is:</P>
                        <span className='text-center italic font-medium'><P>"Is there a way to combine 2 or more steps into one?"</P></span>
                        <P>Well the answer is, <b>THERE IS! </b>After spending some time to properly combine steps and some POCs I asked for the devs. </P>
                        <P>We manage to reduce it to <b>6 STEPS</b> and also removes any unnecessary actions under each steps!</P>
                    </div>
                </div>

                <H1>Problems and Solutions</H1>
                <P>I listed below some of the problems I fixed. I will tackle this in Problem and Solution format.</P>
                <div className='flex flex-col gap-10'>

                    {/* == Problem 1 == */}
                    <div>
                        <H2>#1 Unnecessary steps</H2>
                        <div className='flex flex-col gap-6 mt-1'>
                            <div>
                                <H3>Problem</H3>
                                <P>The current design makes the user go through <b>11 Steps</b> just to convert the old project version into new one. Here is the current process.</P>
                                <ImageCarousel images={currdes} subtitles={currdessubtitle} carouselSize="h-[500px] " />
                                <P>This is not acceptable because user has to exert a lot of effort to convert applications. A wizard should make the user life more easy not harder. </P>
                            </div>
                            <div>
                                <H3>Solution</H3>
                                <P>There are steps that can be combine into 1 step. With that in mind, I manage to make it to 6 steps.</P>
                                <Image src={p1sol} subtitle="Initial iteration for the new steps of Design Import wizard" />
                            </div>


                        </div>
                    </div>

                    {/* == Problem 2 == */}
                    <div>
                        <H2>#2 Unclear Steps</H2>
                        <div className='flex flex-col gap-6 mt-1'>
                            <div>
                                <H3>Problem</H3>
                                <P>The current design doesn’t allow the user to see the progress of converting. Wizard should have some kind of feedback of the progress the user made.</P>

                            </div>
                            <div>
                                <H3>Solution</H3>
                                <P>Introduced Stepper UI Element.</P>
                                <Image src={p2sol} subtitle="Low fidelity for Stepper UI Element" />
                            </div>

                        </div>
                    </div>

                    {/* == Problem 3== */}
                    <div>
                        <H2>#3 Poor UX when selecting Data</H2>
                        <div className='flex flex-col gap-6 mt-1'>
                            <div>
                                <H3>Problem</H3>
                                <ul className='list-decimal pl-6'>
                                    <li>Information doesn’t have proper hierarchy.</li>
                                    <li>All information is being displayed all at once.</li>
                                    <li>Choosing another scope(or form) button is on the bottom part.</li>
                                    <li>User have to click everything if he want to select all data to convert.</li>
                                </ul>
                                <Image src={p3prob} subtitle="As the image show, every information is out of place" />
                            </div>
                            <div>
                                <H3>Solution</H3>
                                <ul className='list-decimal pl-6'>
                                    <li>Create proper grouping of data.</li>
                                    <li>Introduce collapse function for each group.</li>
                                    <li>Change the button to dropdown, so user <b>WON'T</b> have to click the button, select through the drop of scope, then click ok.</li>
                                    <li>Introduce select all for each group.</li>
                                </ul>
                                <Image src={p3sol} subtitle="This is the initial design for selecting forms and fields " />
                            </div>
                        </div>
                    </div>

                    {/* == Final Design == */}
                    <div>
                        <H1>Final Design</H1>
                        <div className='flex flex-col gap-6 mt-1'>
                            <div>
                                <P>Here are the High Fidelities for the final design.</P>
                            </div>

                            <ImageCarousel images={finaldes} subtitles={finaldessub} carouselSize="h-full " />

                        </div>
                    </div>

                    {/* == What I learned == */}
                    <div>
                        <H1>What I learned</H1>

                        <P>Communication is the key.</P>
                        <P>Good thing is I always communicate with the developers what can and can’t be done technically, so I can adjust my design accordingly</P>
                        <P>I know that the Design Import wizard can be optimize even more in the near future </P>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Designimport