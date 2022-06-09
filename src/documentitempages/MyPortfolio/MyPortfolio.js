import React from 'react'
import './myportfolio.css';
import Sitemap from './images/Sitemaps.png'
import { images } from './sketches.js'
import { tablet } from './tablet.js'
import { tabletlandscape } from './tablet.js'
import { phone } from './phone.js'
import { phonelandscape } from './phone.js'
import { desktop, fddesktop } from './desktop.js'
import Gallery from '../../components/Gallery.js';
import { AnimateSharedLayout, motion } from 'framer-motion';
import { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
const MyPortfolio = () => {

    const breakpoint500px = useMediaQuery('(max-width:500px)');
    const [isEmailCopied, setIsEmailCopied] = useState(false);

    const CopiedEmailIndicator = () => {
        console.log(isEmailCopied);
        return (

            <>

                <div className='my-port-email-copy-div'>
                    <div className='my-port-email-copy-bg'>
                        <p className='rmv-mar-pad my-port-email-copy-text'>Email was copied to clipboard</p>
                    </div>
                </div>
            </>
        );
    }
    return (
        <>
            <div className='myport-div'>
                <h1 className='myport-title'>My Portfolio</h1>
                <p className='myport-subtitle'> <em>UI/UX, Front End Development</em></p>
                <br />
                <p>I believe that no matter how simple the design of the web or the app, UI/UX design plays an important role. <br /><br />
                    This is my official Portfolio that represents my UI/UX design and my Front-End Development skills.</p>

                <div className="ui-ux-design-div">
                    <h2 className='ui-ux-design-title'>UI/UX Design</h2>
                    <div className='overview'>
                        <p className='rmv-mar-pad overview-title'>Overview:</p>
                        <div className='overview-content-div'>

                            <div className='overview-contents'>
                                <div className='overview-content-title'>
                                    <p>Duration:</p>
                                </div>
                                <div className='overview-content'>
                                    <p>1 month (including the development phase)</p>
                                </div>
                            </div>
                            <div className='overview-contents'>
                                <div className='overview-content-title'>
                                    <p>Methods:</p>
                                </div>
                                <div className='overview-content'>
                                    <p>Sketching, Wireframes, Prototyping, Usability Testing, UFD, Sitemaps</p>
                                </div>
                            </div>
                            <div className='overview-contents'>
                                <div className='overview-content-title'>
                                    <p>Tools:</p>
                                </div>
                                <div className='overview-content'>
                                    <p>Figma</p>
                                </div>
                            </div>
                            <div className='overview-contents'>
                                <div className='overview-content-title'>
                                    <p>Platforms:</p>
                                </div>
                                <div className='overview-content'>
                                    <p>Mobile Web, Tablet Web, Desktop</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='context'>
                        <p className='rmv-mar-pad context-title'>Context:</p>
                        <p>Portfolio is a general way of showing who you are, what do you do, and your current skillset, Most people who has portfolio generally target hiring, recruiters, and/or clients which they usually just scan your portfolio.</p>
                        <p>Now, I tasked myself to create a design where My portfolio would not make the target user even think where to go as the website itself would subconsiously direct them where to go.</p>
                    </div>
                    <div className='the-challenges'>
                        <p className='rmv-mar-pad challenge-title'>The Challenge:</p>
                        <p>As a UI/UX Designer, How can a portfolio showcase all the ideas/skill in a way that the target user will get an idea of who you are, what you do, and your projects </p></div>
                    <div className='the-goal'>
                        <p className='rmv-mar-pad goal-title'>The Goal:</p>
                        <p>To show case all the skills/ideas without making the targeted users to think that much when navigating the portfolio.</p>
                    </div>
                </div>

                <div className='the-process-div'>
                    <h2 className='the-process-title'>The Process</h2>
                    <div className='research'>
                        <p className='bg-01-text'>01</p>
                        <p className='rmv-mar-pad research-title'>Research</p>
                        <p>Based on my research, they do the following when interacting with your resume or porfolio</p>
                        <p>Recruiters will/might:</p>
                        <ul className='rec-list'>
                            <li className='rec-list-item'>Spends 6 seconds to scan</li>
                            <li className='rec-list-item'>Spends less than 3 minutes on your portfolio</li>
                            <li className='rec-list-item'>They don&apos;t bother that much when the layout/formatting is not organized.</li>
                            <li className='rec-list-item'>Visual Design</li>
                        </ul>
                        <p>For senior Designers/Developer they most likely look at your portfolio a little bit longer:</p>
                        <ul className='rec-list'>
                            <li className='rec-list-item'>To see the visual design</li>
                            <li className='rec-list-item'>Your process</li>
                            <li className='rec-list-item'>The attitude of self-awareness</li>
                        </ul>
                        <p>Recruiters mostly spend their time looking for potential candidates online (LinkedIn,  Jobstreet, Indeed, etc.) so they might use device which has different screensizes.</p>
                    </div>
                    <div className='define'>
                        <p className='bg-02-text'>02</p>
                        <p className='rmv-mar-pad define-title'>Define</p>
                        <p>After I identify what would my target user do when the interact with the portfolio, lets define first our target users and their problem that might face</p>
                        <p className='userp-title'><em>User Profiles:</em></p>
                        <ul className='userp-list'>
                            <li>
                                <div className='up-list-item'>
                                    <div className='up'>HR Recruiters: </div>
                                    <div className='up-desc'>People who actively looking for potential candidates</div>
                                </div>
                            </li>
                            <li >
                                <div className='up-list-item'>
                                    <div className='up'>Senior Designers/Developers: </div>
                                    <div className='up-desc'>people who have experience in their fields.</div>
                                </div> </li>
                        </ul>
                        <p className='problems-title'><em>Problem to address:</em></p>
                        <ul className='problem-list'>
                            <li>How can you make an impression in under a minute</li>
                            <li>How can you organize/format your content to guide the user where to go?</li>
                            <li>Target users have different devices, different devices means different screen size.</li>
                            <li>How can we make the website appealing yet professional adn modern looking?</li>
                        </ul>
                        <div>
                            <p className='sitemap-title'><em>Sitemap:</em></p>
                            <img className='sitemap-img' src={Sitemap} alt="sitemap.png" />
                        </div>

                    </div>
                    <div className='ideate'>
                        <p className='bg-03-text'>03</p>
                        <p className='rmv-mar-pad ideate-title'>Ideate</p>
                        <p className='sketches-title'><em>Sketches</em></p>
                        <p>I use the <strong>Crazy 8 seconds method</strong> where basically I create an idea withing 8 seconds.</p>
                        <div className='sketch-image-div'>
                            <img className='sketch-images' src={images[0]}
                                alt="images" />
                            <img className='sketch-images' src={images[1]}
                                alt="images" />
                        </div>
                        <p className='wireframes-title'><em>Wireframes</em></p>
                        {/* breakpoint500px */}
                        <div className='desktop-div'>
                            <p>Desktop</p>
                            <div className='desktop-content'>
                                {!breakpoint500px && <>
                                    <div className='first-col'>
                                        <img className='desktop-images' src={desktop[0]} alt="homepage.png" />
                                        <img className='desktop-images' src={desktop[1]} alt="works.png" />
                                        <img className='desktop-images' src={desktop[4]} alt="footer.png" />
                                    </div>

                                    <div className='second-col'>
                                        <img className='desktop-images' src={desktop[2]} alt="about.png" />
                                        <img className='desktop-images' src={desktop[3]} alt="contact.png" />
                                    </div>
                                </>}
                                {breakpoint500px && <>

                                    <img className='desktop-images' src={desktop[0]} alt="homepage.png" />
                                    <img className='desktop-images' src={desktop[1]} alt="works.png" />
                                    <img className='desktop-images' src={desktop[2]} alt="footer.png" />

                                    <img className='desktop-images' src={desktop[3]} alt="about.png" />
                                    <img className='desktop-images' src={desktop[4]} alt="contact.png" />
                                </>}
                            </div>
                        </div>
                        <div className='tablet-div'>
                            <p>Tablet - Portrait mode</p>
                            <div className='tablet-content'>
                                {!breakpoint500px && <>
                                    <div className='first-col'>
                                        <img className='tablet-images' src={tablet[0]} alt="images" />
                                        <img className='tablet-images' src={tablet[1]} alt="images" />
                                        <img className='tablet-images' src={tablet[4]} alt="images" />
                                    </div>
                                    <div className='second-col'>
                                        <img className='tablet-images' src={tablet[2]} alt="images" />
                                        <img className='tablet-images' src={tablet[3]} alt="images" />
                                    </div>
                                </>}
                                {breakpoint500px && <>

                                    <img className='tablet-images' src={tablet[0]} alt="homepage.png" />
                                    <img className='tablet-images' src={tablet[1]} alt="works.png" />
                                    <img className='tablet-images' src={tablet[2]} alt="footer.png" />

                                    <img className='tablet-images' src={tablet[3]} alt="about.png" />
                                    <img className='tablet-images' src={tablet[4]} alt="contact.png" />
                                </>}
                            </div>

                            <p>Tablet - Landscape mode</p>
                            <div className='tablet-land-content'>
                                {!breakpoint500px && <>
                                    <div className='first-col'>
                                        <img className='tabletlandscape-images' src={tabletlandscape[0]} alt="images" />
                                        <img className='tabletlandscape-images' src={tabletlandscape[1]} alt="images" />
                                        <img className='tabletlandscape-images' src={tabletlandscape[3]} alt="images" />
                                    </div>
                                    <div className='second-col'>
                                        <img className='tabletlandscape-images' src={tabletlandscape[2]} alt="images" />
                                        <img className='tabletlandscape-images' src={tabletlandscape[4]} alt="images" />
                                    </div>
                                </>}
                                {breakpoint500px && <>

                                    <img className='tabletlandscape-images' src={tabletlandscape[0]} alt="homepage.png" />
                                    <img className='tabletlandscape-images' src={tabletlandscape[1]} alt="works.png" />
                                    <img className='tabletlandscape-images' src={tabletlandscape[2]} alt="footer.png" />

                                    <img className='tabletlandscape-images' src={tabletlandscape[3]} alt="about.png" />
                                    <img className='tabletlandscape-images' src={tabletlandscape[4]} alt="contact.png" />
                                </>}
                            </div>

                        </div>
                        <div className='phone-div'>
                            <p>Phone - Portrait mode</p>
                            <div className='phone-land-content'>
                                <div className='phone-first-col'>
                                    <img className='phone-images' src={phone[0]} alt="images" />
                                    <img className='phone-images' src={phone[1]} alt="images" />
                                </div>
                                <div className='phone-second-col'>
                                    <img className='phone-images' src={phone[3]} alt="images" />
                                    <img className='phone-images' src={phone[4]} alt="images" />
                                    <img className='phone-images' src={phone[5]} alt="images" />
                                </div>
                                <div className='phone-third-col'>
                                    <img className='phone-images' src={phone[2]} alt="images" />
                                    <img className='phone-images' src={phone[6]} alt="images" />
                                    <img className='phone-images' src={phone[7]} alt="images" />
                                </div>
                            </div>
                            <p>Phone - Landscape mode</p>
                            <div className='tablet-content'>
                                {!breakpoint500px && <>
                                    <div className='first-col'>
                                        <img className='phonealandscape-images' src={phonelandscape[0]} alt="images" />
                                        <img className='phonealandscape-images' src={phonelandscape[1]} alt="images" />
                                        <img className='phonealandscape-images' src={phonelandscape[3]} alt="images" />
                                        <img className='phonealandscape-images' src={phonelandscape[4]} alt="images" />
                                    </div>
                                    <div className='second-col'>
                                        <img className='phonealandscape-images' src={phonelandscape[2]} alt="images" />
                                    </div>
                                </>}
                                {breakpoint500px && <>

                                    <img className='phonealandscape-images' src={phonelandscape[0]} alt="homepage.png" />
                                    <img className='phonealandscape-images' src={phonelandscape[1]} alt="works.png" />
                                    <img className='phonealandscape-images' src={phonelandscape[2]} alt="footer.png" />

                                    <img className='phonealandscape-images' src={phonelandscape[3]} alt="about.png" />
                                    <img className='phonealandscape-images' src={phonelandscape[4]} alt="contact.png" />
                                </>}
                            </div>
                        </div>
                        <div className='colors-div'>
                            <p className='colors-title'><em>Colors</em></p>
                            <div className='color'>
                                <div className='color-grp'>
                                    <div className='circle color-bg'>
                                        #2D363D
                                    </div>
                                    <div className='circle color-emp'>
                                        #FFED4D
                                    </div>
                                </div>
                                <div className='color-grp'>
                                    <div className='circle color-main'>
                                        #F0F8FF
                                    </div>
                                    <div className='circle color-boxes'>
                                        #536370
                                    </div>
                                </div>
                            </div>
                            <div className='typography'></div>
                        </div>
                        <div className='typography-div'>
                            <p className='typography-title'><em>Typography</em></p>
                            <div>
                                <h1 className='rmv-mar-pad'>Montserrat</h1>
                                <h4 className='rmv-mar-pad'>by Google</h4>
                                <p className='typo-bold'>Bold</p>
                                <p className='typo-medium'>Medium</p>
                                <p className='typo-regular'>Regular</p>
                            </div>

                        </div>
                    </div>

                    <div className='testing'>
                        <p className='bg-04-text'>04</p>
                        <p className='rmv-mar-pad testing-title'>Testing</p>
                        <p>This phase is very crucial, because it gave me an unbiased look on what is not correct or could be improved in my portfolio.</p>
                        <div className='feedbacks-div'>
                            <div className='nega-feedback'>
                                <p className='nega-title'><em>Negative Feedback</em></p>
                                <ul className='nega-list'>
                                    <li>There is no indicator on what the user should do after the website first load</li>
                                    <li>They don&apos;t have an idea on who am I and what do I do after they land on the homepage</li>
                                    <li>The skill section is not organized in terms of displaying the skills</li>
                                </ul>
                            </div>
                            <div className='posi-feedback'>
                                <p className='posi-title'><em>Positive Feedback</em></p>
                                <ul className='posi-list'>
                                    <li>Animations are good and the overall look of the website is pleasing to the eye and looks professional</li>
                                    <li>Easy to navigate.</li>
                                    <li>Less mouse clicks on their side</li>
                                </ul></div>
                        </div>
                    </div>
                    <div className='iterate'>
                        <p className='bg-05-text'>05</p>
                        <p className='rmv-mar-pad iterate-title'>Iterate</p>
                        <p className='design-changes-title'><em>Design Changes</em></p>
                        <p>With the stated problem above, I changed it into <strong>Single Page Application</strong> type so <strong>user can just scroll to see the contents</strong> and not going back and forth of clicking then scrolling, reducing the time of interactive actions on the user side</p>
                        <p className='accessibility-title'><em>Accessibility</em></p>
                        <ul className='accessibility-list'>
                            <li>I added some icons.</li>
                            <li>I also added some indicator labels on what user should be doing.</li>
                            <li>I also increase some contrast between the CTA elements with the background.</li>
                        </ul>
                    </div>
                </div>

                <div className='final-design-div'>
                    <h2 className='final-design-title'>Final Design</h2>
                    <div className='fddesktop'>
                        <div className='desktop-div'>
                            <div className='fddesktop-content'>
                                {!breakpoint500px && <>
                                    <div className='first-col'>
                                        <img className='desktop-images' src={fddesktop[0]} alt="homepage.png" />
                                        <img className='desktop-images' src={fddesktop[1]} alt="works.png" />
                                        <img className='desktop-images' src={fddesktop[4]} alt="footer.png" />
                                    </div>
                                    <div className='second-col'>
                                        <img className='desktop-images' src={fddesktop[2]} alt="about.png" />
                                        <img className='desktop-images' src={fddesktop[3]} alt="contact.png" />
                                    </div>
                                </>}
                                {breakpoint500px && <>

                                    <img className='desktop-images' src={fddesktop[0]} alt="homepage.png" />
                                    <img className='desktop-images' src={fddesktop[1]} alt="works.png" />
                                    <img className='desktop-images' src={fddesktop[2]} alt="footer.png" />

                                    <img className='desktop-images' src={fddesktop[3]} alt="about.png" />
                                    <img className='desktop-images' src={fddesktop[4]} alt="contact.png" />
                                </>}
                            </div>
                        </div>
                    </div>
                    <div className='live-demo'>
                        <p className='rmv-mar-pad live-demo-title'>Demo</p>
                        <p>Watch the demo of Desktop, Tablet, and Phone for Final Design below

                        </p>
                        <iframe
                            className='youtube'
                            // width="853"
                            // height="480"

                            src="https://www.youtube.com/embed/uGRtRyztdbM"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube"
                        ></iframe>
                    </div>
                    <div className='what-i-learned'>
                        <p className='rmv-mar-pad what-i-learned-title'>What I learned</p>
                        <ul className='i-learned-list'>
                            <li>Designing Phase is very important! The very good analogy I can come up is the importance of blueprint when building a house.</li>
                            <li>You have to know which your most target users are, because most of the content of the page will be based on that.</li>
                            <li>Create a Design system, this will make the design more easier and consistent through out the development phase.</li>
                            <li>Understand the color psychology and theory.</li>
                            <li>Don’t jump into hi-fidelity wireframes immediately, too costly in terms of effort and time if there is some changes.</li>
                            <li>In some cases, pixel perfect design doesn’t work, because we also have to keep in mind the responsiveness aspect of the website</li>
                            <li>It is ok to go back to lo-fi wireframes if needed, because it is better to do all the necessary changes on the development phase rather than when the website is already live.</li>
                            <li>Think of the Accessibility features of the Website in the early stage of design.</li>
                        </ul>
                    </div>
                    <div className='what-i-improve'>
                        <p className='rmv-mar-pad what-improve-title'>What I can improved</p>
                        <ul className='what-improve-list'>
                            <li>Create a design system, because the development would be much easiser and consistent as the developer have guidelines.</li>
                            <li>Create as well the responsive version of your website during your wireframing or ideate phase</li>
                            <li>Prioritization. I usually sometime find myself stuck on something that is not technically possible. For example I was stuck on designing a layout with 200px, which is too small. The smallest phone I searched has 375 width pixels</li>
                            <li>There should be a light mode on my portfolio. As accessibility is a huge factor in web, light and dark mode should be, in my  opinion, available in any website/app/devices.</li>
                            <li>Accessibilty must also take into consideration in the early stages of design.</li>
                        </ul>
                    </div>
                    <div className='next-goal'>
                        <p className='rmv-mar-pad next-goal-title'>My Next Goal</p>
                        <ul className='next-goal-list'>
                            <li>Learn more about how to harmonize color in more accurate way</li>
                            <li>Learn more about how to create a good Design system</li>
                            <li>Learn more about how to communicate better to the user during Usability Testing.</li>
                            <li>Learn more about accessibility feature in website/app</li>
                        </ul>
                    </div>

                </div>

                <div className='my-contacts'>
                    <h2 className='like-my-work'>Like My Work?</h2>
                    <p

                    >Do not hesitate to contact me through <a className=' emp-font-color' href="https://www.linkedin.com/in/m-p-c/" target="_blank"><strong>LinkedIn</strong></a> or to my e-mail: <span className='emp-font-color email-copy'
                        onClick={() => {
                            navigator.clipboard.writeText("mpgcapili@gmail.com")
                            setIsEmailCopied(true);
                            setTimeout(() => setIsEmailCopied(false), 1500)
                            // 
                        }} ><strong>mpgcapili@gmail.com</strong></span></p>

                    {isEmailCopied &&
                        <>
                            <CopiedEmailIndicator />
                        </>
                    }
                </div>

                <div className='my-port-filler'></div>
            </div >
        </>
    )
}

export default MyPortfolio