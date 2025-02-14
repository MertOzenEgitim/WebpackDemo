import '../styles/main.scss';

import Header from '../components/Header';

document.addEventListener('DOMContentLoaded',()=>{
    const headerElement=Header();
    const app=document.getElementById('app');
    app.prepend(headerElement);
});

