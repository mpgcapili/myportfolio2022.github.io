import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// this has been set to manual, to avoid having some "bugs" in animation, 
// bug is that when you refresh the page, andd this is set to auto, somehow, some of those elements with framer motion whileinview, will be executed even though you are not still in view.
window.history.scrollRestoration = 'manual';

// let canControlScrollRestoration = 'scrollRestoration' in window.history
// console.log(canControlScrollRestoration)
// const setScrollPos = () => {
//   sessionStorage.setItem('scrollpos', window.scrollY);
// }
// window.addEventListener("beforeunload", setScrollPos);
// window.removeEventListener("beforeunload", setScrollPos);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
