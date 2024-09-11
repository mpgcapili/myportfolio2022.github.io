import React from 'react'
import { H1, H2, H3, P, ImgSubtitle, Image, ImageChange } from '../../projectformats/Formats'
const Adminui = () => {
    const probs = [];
    const sols = [];
    const desktop = [];
    const mobile = [];
    const dsub = ["Schema Management", "Forms Management Page", "Field Management's Page"];
    const ipsub = ["Schema Management Page"
        , "Forms Management Page"
        , "Field Management Page"
        , "Add Field"
        , "General Details"
        , "Mode configuration buttons"
        , "Mode formula settings"
    ]
    // images 
    for (let index = 0; index < 3; index++) {
        desktop.push(require(`../../Images/AdminUiAssets/d${index + 1}.jpg`))
    }
    for (let index = 0; index < 4; index++) {
        probs.push(require(`../../Images/AdminUiAssets/probp${index + 1}.jpg`))
    }
    for (let index = 0; index < 8; index++) {
        sols.push(require(`../../Images/AdminUiAssets/solp${index + 1}.jpg`))
    }
    for (let index = 0; index < 7; index++) {
        mobile.push(require(`../../Images/AdminUiAssets/ip${index + 1}.jpg`))
    }
    return (
        <>
            <div>
                <div className="text-3xl font-bold">Admin UI</div>
                <P>It is a web app that handles Database Schemas,
                    views, agents, etc.
                </P>
                <p className='italic mb-5'>
                    Disclaimer:<br />
                    There is a lot of sensitive data so I will only show few of the design because of restriction.
                </p>
                <H1>Intro</H1>
                <P> Admin UI website is already existing,
                    so the most of the requests of the leads or users revolves to
                    <b> REDESIGN</b> and <b>IMPROVEMENT</b>.
                </P>
                <P> And this begs the question:
                    <br />
                    <span className='text-center italic font-medium'><P>"How can we redesign and improve the
                        UI/UX without confusing existing users
                        and help new users navigate
                        the website/application easily?"</P>
                    </span>
                </P>

                <H1>Process</H1>
                <div className='flex flex-col gap-8 mb-10'>
                    <div className='getting-info'>
                        <H2>01 Getting Information</H2>
                        <P>I started with getting information with the current users, this saves me the trouble of redesigning the wrong pain points.</P>
                        <p>I asked these main questions:</p>
                        <ul className='list-disc pl-6 mb-4'>
                            <li>What part of website annoys you?</li>
                            <li>What part of website you think needs improvement?</li>
                            <li>Any feature you think is nice to have?</li>
                        </ul>
                        <P>After getting all information, I organized them and prioritize which one should be tackled first.</P>
                    </div>
                    <div className='ideation-and-wireframe'>
                        <H2>02 Ideation and Wireframe</H2>
                        <P>After organizing and prioritizing information, I do the Ideation frame(with a little bit of lo-fi wireframing).</P>
                        <p>I combined these 2 steps because of the following:</p>
                        <ul className='list-disc pl-6'>
                            <li> It allows me to work faster, because I don’t have to do it on paper then translate it to digital.
                                I can also change design based on feedback quickly.</li>
                            <li>It helps the user visualize how it would actually look like when I present this to them
                                for feedback(I don't do colors yet on this stage).</li>
                        </ul>
                    </div>
                    <div className='feedback-testing-and-iteration'>
                        <H2>03 Feedback/Testing and Iteration</H2>
                        <P>After creating those lo-fi wireframes, I will present it to them for a feedback,
                            and if there is one I will take note if it does make sense. </P>
                        <P>IF it doesn’t makes sense, I will discuss it to them the reason why.</P>
                    </div>
                </div>
                {/* ==== PROBLEMS AND SOLUTIONS */}
                <H1>Problems and Solutions</H1>
                <P>I listed below some of the problems I fixed. I will tackle this in Problem and Solution format.</P>
                <div className='flex flex-col gap-10'>

                    {/* == Problem 1 == */}
                    <div>
                        <H2>#1 Lack of Consistency in Cards</H2>
                        <div className='flex flex-col gap-6 mt-1 '>
                            <div>
                                <H3>Problem</H3>
                                <p>Current Design is making each card hard to browse due to inconsistent positioning and sizing of elements inside the card.</p>
                                <ul className='list-decimal pl-6 italic text-gray-600'>
                                    <li>Icon position is not consistent.</li>
                                    <li>creating scroll on a small card size.</li>
                                    <li>Inconsistent paddings.</li>
                                    <li>Small area for status.</li>
                                </ul>
                                <div>
                                    <Image className="" src={probs[0]} alt="Cards with number" minwidth="min-w-80" />
                                </div>
                            </div>
                            <div>
                                <H3>Solution</H3>
                                <P>Create consistent padding, change the status symbol to a circle, remove scrollable, and introduce tooltip feature instead in case description is too long.</P>

                                <Image className="" src={sols[0]} alt="Cards with number" minwidth="min-w-80" subtitle="Low fidelity Card" />
                            </div>


                        </div>
                    </div>

                    {/* == Problem 2 == */}
                    <div>
                        <H2>#2 Poor UX of activating Card’s Status</H2>
                        <div className='flex flex-col gap-6 mt-1'>
                            <div>
                                <H3>Problem</H3>
                                <P>Uses too much space for a simple activation and has a confusing symbol for the card current status.</P>
                                <Image src={probs[1]} subtitle="Current Design of activating any card." />
                            </div>
                            <div>
                                <H3>Solution</H3>
                                <P>Introduced a switch toggle button, also fixed the visual hierarchy for the card elements.</P>
                                <Image src={sols[1]} subtitle="Proposed idea, put toggle switch on the card" />
                            </div>
                        </div>
                    </div>

                    {/* == Problem 3== */}
                    <div>
                        <H2>#3 Improper usage of Negative Spaces</H2>
                        <div className='flex flex-col gap-6 mt-1'>
                            <div>
                                <H3>Problem</H3>
                                <p>Spacing was not used efficiently.</p>
                                <ul className='list-decimal pl-6 italic text-gray-600'>
                                    <li>The list (which is very important element) has small allotted space and each list has no proper hierarchy.</li>
                                    <li>Text Area took a lot of width space but has small height space.</li>
                                    <li>Unused pace.</li>
                                </ul>
                                <Image src={probs[2]} />
                            </div>
                            <div>
                                <H3>Solution</H3>
                                <P>Create a separate section for The List(1) and the Formulas(2).</P>

                                <Image src={sols[2]} subtitle="Separate the Field Settings and Mode Settings" />
                            </div>
                        </div>
                    </div>

                    {/* == Problem 4 == */}
                    <div>
                        <H2>#4 Not Responsive</H2>
                        <div className='flex flex-col gap-6 mt-1'>
                            <div>
                                <H3>Problem</H3>
                                <P>The current design cannot handle smaller screens. It is not readable anymore!</P>
                                <Image src={probs[3]} subtitle="Disclaimer: The image's UI above might be different because it already has its first iteration of UI design update." />

                            </div>
                            <div>
                                <H3>Solution</H3>
                                <p>Create Design for smaller screen. Below are the numbers representing parts of the current design.</p>
                                <ul className='list-decimal pl-6 italic text-gray-600'>
                                    <li>Field Settings.</li>
                                    <li>Mode configuration buttons.</li>
                                    <li>Field list available.</li>
                                    <li>Added field list.</li>
                                    <li>Field Settings.</li>
                                    <li>Mode Settings.</li>
                                </ul>
                                <Image src={sols[3]} />
                                <P>And see below how I transformed those UI into mobile screen. Please refer to the above image to compare.</P>
                                <div className='grid grid-cols-2 gap-2
                                sm:grid-cols-4'>

                                    <Image src={sols[4]} subtitle={`2. Mode configuration buttons.\n4. Added field list.`} />
                                    <Image src={sols[5]} subtitle="3. Field list available." />

                                    <Image src={sols[6]} subtitle="5. Field Settings." />
                                    <Image src={sols[7]} subtitle="6. Mode Settings." />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* == Final Design == */}
                    <div>
                        <H1>Final Design</H1>
                        <div className='flex flex-col gap-6 mt-1'>
                            <div>
                                <P>Here are the High Fidelities for the final design.</P>
                                <H2>Web</H2>
                                <div className='grid grid-cols-1 gap-2 '>
                                    {
                                        desktop.map((d, key) => <Image key={key} src={d} subtitle={dsub[key]} />)
                                    }
                                </div>
                            </div>
                            <div>
                                <H2>Mobile</H2>

                                <div className='grid grid-cols-1 gap-2
                                sm:grid-cols-4 '>
                                    {
                                        mobile.map((d, key) => <Image key={key} src={d} subtitle={ipsub[key]} />)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* == What I learned == */}
                    <div>
                        <H1>What I learned</H1>

                        <P className='mt-1'>Every data is important, users(developers) feedback helped a lot to identify what problems to prioritize, their concerns, feature that they think.</P>
                        <P>And because of that it saves me the trouble of redesigning the wrong area and deliver the design on time.</P>
                    </div>
                </div>
            </div >
        </>
    )
}
export default Adminui