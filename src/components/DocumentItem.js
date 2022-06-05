import React from 'react'

import { MdClose } from "react-icons/md";
import '../css/documentitem.css'
const DocumentItem = ({ showDocItem }) => {

    const bodyElement = document.querySelector('body');
    const htmlElement = document.querySelector('html');
    bodyElement.className = "disable-scroll-main"
    htmlElement.className = "enable-smooth-scroll"

    function closeDocModal() {
        bodyElement.className = "enable-scroll-main";
        htmlElement.className = "disable-smooth-scroll"
        showDocItem(false);
    }

    return (
        <>



            <div className='document-item-div'>DocumentItem

                <MdClose className='doc-close-icon' onClick={() => closeDocModal()} />

            </div>
        </>
    )
}

export default DocumentItem