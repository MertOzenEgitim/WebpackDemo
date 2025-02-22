import logo from '../assets/images/logo.png';

export default function Footer(){
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <h1>Webpack Project Footer</h1>
        <img src="${logo}" alt="logo">
    `;
    return footer;
}

