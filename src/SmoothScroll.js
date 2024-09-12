import { useEffect } from "react";
import Scrollbar from 'smooth-scrollbar';

const SmoothScroll = () => {

    useEffect(() => {
        Scrollbar.init(document.body);

    }, [])
    return null;
}

export default SmoothScroll