import '../styles/main.scss';
import {add} from "./utils.js";

// import Header from '../components/Header';

// document.addEventListener('DOMContentLoaded',()=>{
//     const headerElement=Header();
//     const app=document.getElementById('app');
//     app.prepend(headerElement);
// });

const btnHeader=document.getElementById('btn-header');
const btnFooter=document.getElementById('btn-footer');
const app=document.getElementById('app');

btnHeader.addEventListener('click',async ()=>{
    const headerModule=await import('../components/Header');    
    const Header=headerModule.default();
    console.log(add(5,3));  
    app.prepend(Header);
});


btnFooter.addEventListener('click',async ()=>{
    const footerModule=await import('../components/Footer');
    const Footer=footerModule.default();
    app.append(Footer);
});