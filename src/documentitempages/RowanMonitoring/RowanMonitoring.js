import React from 'react'
import './rowan.css';
import { currdes } from './currentdesign.js'
import { lowfi } from './lowfi.js'
import { hifi, feedback } from './hifi.js'
import { finaldes_desktop, finaldes_mobile } from './finaldesign.js'
import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import CurrDesLogin from './currentdesign/currdes_loginalert.png'
import NewDesLogin from './currentdesign/newdes_loginalert.png'

import CurrDesDLBtn from './currentdesign/currdes_dlbutton.png'
import NewDesDLBtn from './currentdesign/newdes_dlbutton.png'

import CurrDesAppSum from './currentdesign/currdes_appsummary.png'
import NewDesAppSum from './currentdesign/newdes_appsummary.png'

import CurrDesTotalReport from './currentdesign/currdes_totalreport.png'
import NewDesTotalReport from './currentdesign/newdes_totalreport.png'

const RowanMonitoring = () => {
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
            <div className='rowan-div' id='rowan-div'>
                <h1 className='rowan-title' id="rowan-title">Production Monitoring Tool</h1>
                <p className='rowan-subtitle'> <em>UI/UX Design, Front End Development</em></p>
                <p>Redesigning of the monitoring tools used in Sun life.</p>

                <div className='ui-ux-div'>
                    <div className='overview'>
                        <p className='rmv-mar-pad overview-title'>Overview:</p><div className='overview-content-div'>

                            <div className='overview-contents'>
                                <div className='overview-content-title'>
                                    <p>Duration:</p>
                                </div>
                                <div className='overview-content'>
                                    <p>1 month</p>
                                </div>
                            </div>
                            <div className='overview-contents'>
                                <div className='overview-content-title'>
                                    <p>Methods:</p>
                                </div>
                                <div className='overview-content'>
                                    <p>Wireframes, Prototyping, Usability Testing</p>
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
                        </div>
                    </div>
                    <div className='context'>

                        <p className='rmv-mar-pad context-title'>Context:</p>
                        <p>This web is a <strong>monitoring tool</strong> for the financial advisors to <strong>keep track of their bonuses, current income, future income, sales, etc.</strong></p>
                        <p>
                            <em>
                                A little bit of context, the original developer of this monitoring tool is also a fullstack dev who is also a financial advisor.</em>
                        </p>
                        <p>
                            <em>
                                <u>
                                    NOTE: Due to the sensitive information, the client only approves some of the web pages to be shown in this portfolio.</u></em>
                        </p>
                    </div>
                    <div className='the-challenges'>

                        <p className='rmv-mar-pad challenge-title'>The Challenge:</p>
                        <p>Redesigning the whole web application with new ui and ux without making the user feels new to the web. </p>
                    </div>
                    <div className='the-goal'>
                        <p className='rmv-mar-pad goal-title'>The Goal:</p>
                        <ul className='rec-list'>
                            <li className='rec-list-item'>The user won’t need to figure out on how to use the new look of the web app with the new improved user experience.</li>
                            <li className='rec-list-item'>Redesigning the web app to look professional</li>
                            <li className='rec-list-item'>Enhance responsiveness</li>
                        </ul>
                    </div>
                </div>
                <div className="the-process-div">

                    <h2 className='the-process-title'>The Process</h2>
                    <div className="research">
                        <p className='bg-01-text'>01</p>
                        <p className='rmv-mar-pad research-title'>Research</p>
                        <p>I began this case study by asking the owner/developer of this application what kind of users uses the monitoring tool. The developer said:</p>
                        <center>
                            <h3><em>"It is used by financial advisors who are strictly working at Sun Life"</em> </h3>
                        </center>

                        <br />
                        <p>And since the <strong><u>client is also a software developer and the one created this web app</u></strong>, he said that <strong><u>he already put all the necessary details/functionality needed by the financial advisor in the web app</u></strong>. So all he need from me is to (which is our goal):</p>

                        <ul className='rec-list'>
                            <li className='rec-list-item'><em>Redesign the website to have a professional look.</em></li>
                            <li className='rec-list-item'><em>Enhance the responsiveness of the web app, especially on the reporting pages.</em></li>
                            <li className='rec-list-item'><em>Enhance the overall user experience</em></li>
                        </ul>
                    </div>

                    <div className='define'>
                        <p className='bg-02-text'>02</p>
                        <p className='rmv-mar-pad define-title'>Define</p>
                        <p>Based on the research, the high level of thee problem that we can define is that: </p>

                        <ul className='rec-list'>

                            <li className='rec-list-item'>Web app in mobile/tablet view do not adapt</li>

                            <li className='rec-list-item'>Look of the web is not professional looking, and he is having a hard time selling this to another branch</li>

                            <li className='rec-list-item'>Too many buttons to click</li>

                            <li className='rec-list-item'>The report pages have unnecessary buttons </li>

                            <li className='rec-list-item'>Important CTA are hard to access</li>

                        </ul>


                    </div>

                    <div className='ideate'>
                        <p className='bg-03-text'>03</p>
                        <p className='rmv-mar-pad ideate-title'>Ideate</p>
                        <p className='sketches-title'><em>Low Fidelity Wireframe</em></p>
                        <p>After defining the pain points, I did the low fidelity wireframe, I also enhanced some of the UX on this stage. Below are the most noticeable changes</p>

                        <div className='sketches-rowan-div'>
                            <ul className='sketches-list'>
                                {
                                    lowfi.map((image, index) => (
                                        <li key={index}><img className='rowan-sketch-images' src={image.img}
                                            alt={image.subtitle} />
                                            <p className='rmv-mar-pad rowan-sketches-subtitle'>{image.subtitle}</p>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <p className='wireframes-title'><em>High Fidelity Wireframe</em></p>
                        <p>After the lofi wireframe, I did the hifi wireframe, this helped me get some more solid feedback because the client is now looking at the potential final design.</p>
                        <div className='sketches-rowan-div'>
                            <ul className='sketches-list'>
                                {
                                    hifi.map((image, index) => (
                                        <li key={index}><img className='rowan-sketch-images' src={image.img}
                                            alt={image.subtitle} />
                                            <p className='rmv-mar-pad rowan-sketches-subtitle'>{image.subtitle}</p>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <p className='wireframes-title'><em>Enhanced User Interface for User Experience</em></p>
                        <p>Below are the list to show you what part of the web was enhanced in terms of User Experience</p>
                        <div className='sketches-rowan-div'>
                            <ul className='rec-list'>
                                <li className='rec-list-item'>
                                    <h3>Login Page</h3>
                                    <p><strong><u>Removing unncessary alerts</u></strong> when user is login successfully or unsuccessfully, then change the alerts for unsuccessful login on field levels </p>
                                    <div className='currvsnew-div'>
                                        <div className='currvsnew-items'>
                                            <img className='currvsnew-img' src={CurrDesLogin}
                                                alt="current design login.png" />
                                            <p className='rmv-mar-pad rowan-sketches-subtitle'>Current Design for Login Alerts</p>
                                        </div>
                                        <div className='currvsnew-items'>
                                            <img className='currvsnew-img' src={NewDesLogin}
                                                alt="current design login.png" />
                                            <p className='rmv-mar-pad rowan-sketches-subtitle'>New Design for Login Alerts</p>
                                        </div>
                                    </div>

                                </li>
                                <li className='rec-list-item'>
                                    <h3>CSV Export Button</h3>
                                    <p><strong><u>Change the positioning</u></strong> for the CSV Export button in reports, so that <strong><u>user can easily access it both on mobile and Web platform</u></strong></p>
                                    <div className='currvsnew-div'>
                                        <div className='currvsnew-items'>
                                            <img className='currvsnew-img' src={CurrDesDLBtn}
                                                alt="current design login.png" />
                                            <p className='rmv-mar-pad rowan-sketches-subtitle'>Current Design for Download Button</p>
                                        </div>
                                        <div className='currvsnew-items'>
                                            <img className='currvsnew-img' src={NewDesDLBtn}
                                                alt="current design login.png" />
                                            <p className='rmv-mar-pad rowan-sketches-subtitle'>New Design for Download Button change to Export CSV</p>
                                        </div>
                                    </div>

                                </li>
                                <li className='rec-list-item'>
                                    <h3>Application Submission Summary</h3>
                                    <p><strong><u>Change the format</u></strong> of the Review section when submitting an Application for the <strong><u>user to understand efficiently</u></strong></p>
                                    <div className='currvsnew-div'>
                                        <div className='currvsnew-items'>
                                            <img className='currvsnew-img' src={CurrDesAppSum}
                                                alt="current design login.png" />
                                            <p className='rmv-mar-pad rowan-sketches-subtitle'>Current Design for Review Submission Summary</p>
                                        </div>
                                        <div className='currvsnew-items'>
                                            <img className='currvsnew-img' src={NewDesAppSum}
                                                alt="current design login.png" />
                                            <p className='rmv-mar-pad rowan-sketches-subtitle'>New Design for Review Submission Summary</p>
                                        </div>
                                    </div>

                                </li>

                                <li className='rec-list-item'>
                                    <h3>Total Header Summary in Reports</h3>
                                    <p><strong><u>Change the format and positioning</u></strong> of the Total rows in report so <strong><u>users can immediately see the summary even if the result is over a hundred</u></strong> </p>
                                    <div className='currvsnew-div'>
                                        <div className='currvsnew-items'>
                                            <img className='currvsnew-img currvsnew-img-mdf' src={CurrDesTotalReport}
                                                alt="current design login.png" />
                                            <p className='rmv-mar-pad rowan-sketches-subtitle'>Current Design for Total row in Reports</p>
                                        </div>
                                        <div className='currvsnew-items'>
                                            <img className='currvsnew-img currvsnew-img-mdf' src={NewDesTotalReport}
                                                alt="current design login.png" />
                                            <p className='rmv-mar-pad rowan-sketches-subtitle'>New Design for Total row in Reports</p>
                                        </div>
                                    </div>

                                </li>
                                {/* {
                                    hifi.map((image, index) => (
                                        <li key={index}><img className='rowan-sketch-images' src={image.img}
                                            alt={image.subtitle} />
                                            <p className='rmv-mar-pad rowan-sketches-subtitle'>{image.subtitle}</p>
                                        </li>
                                    ))
                                } */}
                            </ul>
                        </div>
                    </div>
                    <div className='testing'>
                        <p className='bg-04-text'>04</p>
                        <p className='rmv-mar-pad testing-title'>Testing/Feedback</p>
                        <p>I frequently have a short meeting with the client to get his feedbacks, here are the comments he gave:</p>
                        <ul className='nega-list'>
                            <li>Remove the line before the sub-menu</li>
                            <li>Remove the alternating color on the report tables</li>
                            <li>Have a No Data display on reports if the reports returned empty.</li>
                        </ul>
                    </div>
                    <div className='iterate'>
                        <p className='bg-05-text'>05</p>
                        <p className='rmv-mar-pad iterate-title'>Iterate</p>
                        <p className='design-changes-title'><em>Design Changes</em></p>
                        <p>Feedback plays a huge role! I changed the design according to the feedback and the result is indeed much better and cleaner!</p>
                        <div className='sketches-rowan-div'>
                            <ul className='sketches-list'>
                                {
                                    feedback.map((image, index) => (
                                        <li key={index}><img className='rowan-sketch-images rowan-sketch-images-mdf' src={image.img}
                                            alt={image.subtitle} />
                                            <p className='rmv-mar-pad rowan-sketches-subtitle'>{image.subtitle}</p>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                    <div className='final-design-div'>
                        <h2 className='final-design-title'>Final Design</h2>
                        <p>After getting some feedback and doing iteration, here is the some of the final design of the app</p>
                        <p><em>To see the <strong>comparison between the current and final design</strong>, <a className='emp-font-color' href="./Production Monitoring Tool Final Design.pdf" rel="noreferrer" target="_blank"><strong>click here</strong></a></em></p>
                        <h3>Desktop Platform</h3>
                        <div className='sketches-rowan-div'>
                            <ul className='sketches-list'>
                                {
                                    finaldes_desktop.map((image, index) => (
                                        <li key={index}><img className='rowan-sketch-images rowan-sketch-images-mdf' src={image.img}
                                            alt={image.subtitle} />
                                            <p className='rmv-mar-pad shopee-sketches-subtitle'>{image.subtitle}</p>
                                        </li>
                                    ))
                                }
                            </ul>

                        </div>
                        <br />
                        <p>Since <strong><u>responsiveness is also an issue</u></strong> because <strong><u>financial advisor spends their time mostly on the road</u></strong>, I included the design for the mobile devices.</p>
                        <p>This <strong><u>greatly improve</u></strong> the overall experience especially when <strong><u>viewing the report pages on a mobile devices</u></strong>.</p>
                        <h3>Mobile Platfom</h3>
                        <div className='sketches-rowan-div'>
                            <ul className='sketches-list'>
                                {
                                    finaldes_mobile.map((image, index) => (
                                        <li key={index}><img className='shopee-lofi-images' src={image.img}
                                            alt={image.subtitle} />
                                            <p className='rmv-mar-pad shopee-sketches-subtitle'>{image.subtitle}</p>
                                        </li>
                                    ))
                                }
                            </ul>

                        </div>


                        <div className='what-i-learned'>
                            <p className='rmv-mar-pad what-i-learned-title'>What I learned</p>
                            <p>Not every learning points toward the UI UX side, outside ui ux side matters too! Here are the key points I learned:
                            </p>
                            <ul className='rec-list'>
                                <li className='rec-list-item'><em>Having frequent meeting or at least including the client to the process reduces the chances of the project getting delayed.</em></li>
                                <li className='rec-list-item'><em>Your client’s feedback is much as important as your user’s feedback</em></li>

                            </ul>
                        </div>
                        <div className='what-i-improve'>
                            <p className='rmv-mar-pad what-improve-title'>What I can improved</p>
                            <p>I think is <strong><u>being proactive</u> </strong> to set a meeting to the client, even though he is a friend of mine and don’t want to bother him too much, I should have tried my best to set a meeting with him every time I do major changes and get feedback from him.
                            </p>

                        </div>


                    </div>
                </div>



                <div className='my-contacts'>
                    <h2 className='like-my-work'>Like My Work?</h2>
                    <p

                    >Do not hesitate to <strong>contact me</strong> through <a className=' emp-font-color' href="https://www.linkedin.com/in/m-p-c/" rel="noreferrer" target="_blank"><strong>LinkedIn</strong></a> or to my e-mail: <span className='emp-font-color email-copy'
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
            </div>


        </>
    )
}

export default RowanMonitoring