import React from 'react'
import './shopee.css';
import { images } from './sketches.js'
import { lowfi } from './lofi.js'
import { hifi, finaldes, addtocart } from './hifi.js'
import { finaldeswphone } from './finaldesign.js'
import MainProductPage from './shopee app main product page.jpeg'
import MyDesignMainProductPage from './finaldesign/Item clicked - Main item.png'
import PrevComment from './finaldesign/hifi/compressed paragraph.png'
import CurrentComment from './finaldesign/hifi/changes comment.png'
import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

const ShopeeApp = () => {
    const [isMyDesMainProd, setIsMyDesMainProd] = useState(false);
    const [isPrevCommentDes, setIsPrevCommentDes] = useState(false);
    const [isEmailCopied, setIsEmailCopied] = useState(false);
    // const offset = document.querySelector("demo").offsetTop;
    // window.scrollTo({ top: offset })
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
        <div className='shopee-div' id="shopee-div">
            <h1 className='shopee-title' id="shopee-title">Shopee App</h1>
            <p className='shopee-subtitle'> <em>UI/UX Design</em></p>
            <p>Redesigning of one of the most popular e-commerce app in the Philippines</p>

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
                                <p>Sketching, Wireframes, Prototyping, Usability Testing</p>
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
                    <p>Shopee App is an e-commerce mobile application where people can buy/sell goods online.</p>
                </div>

                <div className='the-challenges'>

                    <p className='rmv-mar-pad challenge-title'>The Challenge:</p>
                    <p>With a small real screen real estate of our mobile devices, how can we efficiently and effectively show all the necessary information without making the user feel overwhelmed?</p>
                </div>
                <div className='the-goal'>
                    <p className='rmv-mar-pad goal-title'>The Goal:</p>
                    <ul className='rec-list'>
                        <li className='rec-list-item'>User will scan the app's content successively, avoiding jumping too often to diffrent shopping categories/items</li>
                        <li className='rec-list-item'>Easy saving liked items or adding items to cart</li>
                        <li className='rec-list-item'>Organized the sections on pages in a such a way user won't extract extra effort to understand the infromation being displayed</li>
                    </ul>
                </div>
            </div>
            <div className='the-process-div'>

                <h2 className='the-process-title'>The Process</h2>
                <div className='research'>
                    <p className='bg-01-text'>01</p>
                    <p className='rmv-mar-pad research-title'>Research</p>
                    <p>I began this study with researching what kind of user uses the Shopee App to gain some insights what behavior they might do and how do they feel when interacting with the app.</p>

                    <ul className='rec-list'>
                        <br />
                        <li className='rec-list-item'>

                            <p><strong>Buyers</strong> - the consumers, these types of users usually have this characteristics</p>
                            <ul className='rec-list'>
                                <li className='rec-list-item'><em>They know what item to buy</em></li>
                                <li className='rec-list-item'><em>They dont know what item to buy, usuall scans homeage or the cart.</em></li>
                                <li className='rec-list-item'><em>They know how to navigate the app</em></li>
                                <li className='rec-list-item'><em>They don't know how to navigate the app ex. usually first time users</em></li>
                            </ul>
                        </li>
                        <br />
                        <li className='rec-list-item'><p><strong>Sellers</strong> - the one who sells goods, they usually have this characteristics</p>
                            <ul className='rec-list'>
                                <li className='rec-list-item'><em>They could be buyers</em></li>
                                <li className='rec-list-item'><em>They know how to navigate the app</em></li>
                                <li className='rec-list-item'><em>They don't know how to navigate the app ex. usually first time users</em></li>
                            </ul>
                        </li>

                    </ul>
                    <br />
                    <br />

                    <p>Before defining pain points, <strong>let's understand first how do they feel and what do they do</strong> when interacting with the app.</p>
                    <ul className='rec-list'>
                        <br />
                        <li className='rec-list-item'>

                            <p><strong>What they usually do:</strong></p>
                            <ul className='rec-list'>
                                <li className='rec-list-item font-medium'><em>Randomly clicking to get the feel of the app</em></li>
                                <li className='rec-list-item font-medium'><em>Check cart to buy items</em></li>
                                <li className='rec-list-item font-medium'><em>Search for a specific ite</em></li>
                                <li className='rec-list-item font-medium'><em>Check chat to see some replies/inquiries</em></li>
                                <li className='rec-list-item font-medium'><em>Add to cart an item to buy</em></li>
                                <li className='rec-list-item font-medium'><em>Check the status of the item (both for sellers and buyers)</em></li>
                                <li className='rec-list-item font-medium'><em>Check the status of the shop (for sellers)</em></li>
                                <li className='rec-list-item font-medium'><em>Check item on the homepage</em></li>
                            </ul>
                        </li>
                        <br />
                        <li className='rec-list-item'><p><strong>How they usually feel:</strong></p>
                            <ul className='rec-list'>
                                <li className='rec-list-item font-medium'><em>They feel confused/lost due to the sea of contents shown</em></li>
                                <li className='rec-list-item font-medium'><em>They exert more effort in understanding the information shown to them</em></li>
                                <li className='rec-list-item font-medium'><em>They feel that they also exert effort when checking the status/health of their shop</em></li>
                                <li className='rec-list-item font-medium'><em>They feel happy because buying an item from start to finish is easy</em></li>
                            </ul>
                        </li>

                    </ul>

                </div>

                <div className='define'>
                    <p className='bg-02-text'>02</p>
                    <p className='rmv-mar-pad define-title'>Define</p>
                    <p>Based on the research, the high level of thee problem that we can define is that: </p>

                    <ul className='rec-list'>
                        <br />
                        <li className='rec-list-item'>

                            <p><strong>Buyers</strong></p>
                            <ul className='rec-list'>
                                <li className='rec-list-item'><em>Lot of information shown in the pages</em></li>
                                <li className='rec-list-item'><em>Information shown is not organized and user has to exert more effort just to understand which information belongs to which category or section</em></li>
                            </ul>
                        </li>
                        <br />
                        <li className='rec-list-item'><p><strong>Sellers</strong></p>
                            <ul className='rec-list'>
                                <li className='rec-list-item'><em>No quick overview or Dashboard for their shop performance</em></li>
                                <li className='rec-list-item'><em>Detailed information of their shop is not organized and shown in a repetitive way which user might exert effort to understand or scan.</em></li>
                            </ul>
                        </li>

                    </ul>


                </div>

                <div className='ideate'>
                    <p className='bg-03-text'>03</p>
                    <p className='rmv-mar-pad ideate-title'>Ideate</p>
                    <p className='sketches-title'><em>Sketches</em></p>
                    <p>I drew up a few sketches of what of the major page in Shopee might look like. This helped me visualize my designs decisions before doing wireframing.</p>
                    <div className='sketches-shopee-div'>
                        <ul className='sketches-list'>
                            {
                                images.map((image, index) => (
                                    <li key={index}><img className='shopee-sketch-images' src={image.img}
                                        alt={image.subtitle} />
                                        <p className='rmv-mar-pad shopee-sketches-subtitle'>{image.subtitle}</p>
                                    </li>
                                ))
                            }
                        </ul>

                    </div>
                    <p className='wireframes-title'><em>Low Fidelity Wireframe</em></p>
                    <p>After sketching, I did the low fidelity wireframe, this help me create a more solid visualization design to make more consistent through out the app.</p>
                    <div className='sketches-shopee-div'>
                        <ul className='sketches-list'>
                            {
                                lowfi.map((image, index) => (
                                    <li key={index}><img className='shopee-lofi-images' src={image.img}
                                        alt={image.subtitle} />
                                        <p className='rmv-mar-pad shopee-sketches-subtitle'>{image.subtitle}</p>
                                    </li>
                                ))
                            }
                        </ul>

                    </div>
                    <p className='wireframes-title'><em>Initial High Fidelity Wireframe</em></p>
                    <p>After the lofi wireframe, I did the hifi wireframe, this helped me get some more solid feedback because the participants is now looking at the potential final design.</p>
                    <div className='sketches-shopee-div'>
                        <ul className='sketches-list'>
                            {
                                hifi.map((image, index) => (
                                    <li key={index}><img className='shopee-lofi-images' src={image.img}
                                        alt={image.subtitle} />
                                        <p className='rmv-mar-pad shopee-sketches-subtitle'>{image.subtitle}</p>
                                    </li>
                                ))
                            }
                        </ul>

                    </div>
                </div>

                <div className='testing'>
                    <p className='bg-04-text'>04</p>
                    <p className='rmv-mar-pad testing-title'>Testing</p>
                    <p>I ask 10 people to check the initial high fidelity wireframe, and here is the most common feedback.</p>
                    <div className='feedbacks-div'>
                        <div className='nega-feedback'>
                            <p className='nega-title'><em>Negative Feedback</em></p>
                            <ul className='nega-list'>
                                <li>The height of the menubar in the is too long, too distracting</li>
                                <li>The color of the CTA button does not feel like shopee</li>
                                <li>Spacing of each sentences feels to compressed</li>
                            </ul>
                        </div>
                        <div className='posi-feedback'>
                            <p className='posi-title'><em>Positive Feedback</em></p>
                            <ul className='posi-list'>
                                <li>Overall feel of the design feels comfortable to use and easy to read</li>
                                <li>Know where to look as the sectiinos is very organized</li>
                                <li>Seller account is outstanding! they can see the shop performance immediately</li>
                                <li>Overall look feels modern</li>
                            </ul></div>
                    </div>
                    <p>During this phase, some participants agreed that it would be better to give a solution where it <strong>allows them to access the search bar after a product is clicked</strong>.</p>
                    <p>To explain this visually , here is the comparison between the official design of Shopee App and my design:</p>
                    <div className='shopee-vs-mydesign'>
                        <div>
                            <img className='shopee-main-prod-page' src={MainProductPage} alt="Official Shopee Design" />
                            <p>Shopee Official Design</p>
                        </div>
                        <div>
                            <img className='shopee-main-prod-page' src={MyDesignMainProductPage} alt="My Design" />
                            <p>My Design</p></div>
                    </div>
                    <p>As you can see, Search bar was added on my design, so user won't have to click arrow back to search bar just to search items.</p>
                </div>
                <div className='iterate'>
                    <p className='bg-05-text'>05</p>
                    <p className='rmv-mar-pad iterate-title'>Iterate</p>
                    <p className='design-changes-title'><em>Design Changes</em></p>
                    <p>Feedback plays a huge role! I changed the design according to the feedback and the result is indeed much better.</p>
                    <div className='prev-vs-final-des'>
                        <div>
                            <h3>Main Product Page</h3>
                            <p><em>*click the picture to see the changes</em></p>
                            <img onClick={() => setIsMyDesMainProd(!isMyDesMainProd)} className='shopee-main-prod-page' src={isMyDesMainProd ? finaldes[2].img : hifi[1].img} alt={isMyDesMainProd ? finaldes[5].subtitle : hifi[2].subtitle} />
                            <p>Design<strong>{isMyDesMainProd ? " after " : " before "}</strong>Feedback</p>

                        </div>
                        <div>
                            <h3>Comment Page</h3>
                            <p><em>*click the picture to see the changes</em></p>
                            <img onClick={() => setIsPrevCommentDes(!isPrevCommentDes)} className='shopee-main-prod-page' src={isPrevCommentDes ? CurrentComment : PrevComment} alt={isMyDesMainProd ? finaldes[6].subtitle : hifi[3].subtitle} />
                            <p>Design<strong>{isPrevCommentDes ? " after " : " before "}</strong>Feedback</p>
                        </div>
                    </div>
                    <p>During the iteration phase, participants also <strong>suggested that they should have an option where when they add to cart, they can select multiple variation of 1 product item.</strong></p>
                    <p>So I design a new version of selecting multiple variants of product item continuously and easily</p>
                    <div className='sketches-shopee-div'>
                        <ul className='sketches-list'>
                            {
                                addtocart.map((image, index) => (
                                    <li key={index}><img className='shopee-lofi-images' src={image.img}
                                        alt={image.subtitle} />
                                        <p className='rmv-mar-pad shopee-sketches-subtitle'>{image.subtitle}</p>
                                    </li>
                                ))
                            }
                        </ul>

                    </div>
                </div>

                <div className='final-design-div'>
                    <h2 className='final-design-title'>Final Design</h2>
                    <p>After getting some feedback and doing iteration, here is the some of the final design of the app</p>
                    <p>To see all the final designs, <a className='emp-font-color' href="./Shopee Final Design.pdf" rel="noreferrer" target="_blank"><strong>click here</strong></a></p>
                    <div className='sketches-shopee-div'>
                        <ul className='sketches-list'>
                            {
                                finaldeswphone.map((image, index) => (
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
                        <p>Users mostly will only care about the ressult, but if you ask them some specific questions, some of their unforeseen pain points suddenly comes up.</p>
                        <p>Example is that they didn't notice that I included the search bar in the main product page <u> (explained in 04. Testing Section)</u> until I asked them if is it a good idea to add that search bar.</p>

                        <p>So instead of finding the solution immediately, <strong>ask the correct questions first!</strong></p>

                    </div>
                    <div className='what-i-improve'>
                        <p className='rmv-mar-pad what-improve-title'>What I can improved</p>
                        <p>First thing is before doing any wireframe, try to list down first all the potential problem you can see or the potential questions you might ask, it will lessen your chance of changing the wireframe frequently.</p>
                        <p>And the second thing is asking other designers or users or stakeholders for their opinion when I am stuck on finding a solution.</p>
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
        </div >

    )
}

export default ShopeeApp