import React from 'react'

import { MdClose } from "react-icons/md";
import '../css/documentitemcontainer.css'
import MyPortfolio from '../documentitempages/MyPortfolio/MyPortfolio.js';

const DocumentItem = ({ index }) => {
    switch (index) {
        case 0:
            return <MyPortfolio />
        default:
            return;
    }
}

const DocumentItemContainer = ({ showDocItem, index }) => {

    const bodyElement = document.querySelector('body');
    const htmlElement = document.querySelector('html');
    bodyElement.className = "disable-scroll-main"
    htmlElement.className = "enable-smooth-scroll"

    function closeDocModal() {
        bodyElement.className = "enable-scroll-main";
        htmlElement.className = "disable-smooth-scroll"
        showDocItem(false);
    }


    // if index = 0 then show my portfolio 
    return (
        <>



            <div className='document-item-div'>
                <div className='icon-div'>
                    <MdClose className='doc-close-icon' onClick={() => closeDocModal()} />
                </div>
                < DocumentItem index={index} />

            </div>
        </>
    )
}

export default DocumentItemContainer