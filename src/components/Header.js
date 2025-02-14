import logo from '../assets/images/logo.png';

export default function Header(){
    const header = document.createElement('header');
    header.innerHTML = `
        <h1>Webpack Project</h1>
        <img src="${logo}" alt="logo">
    `;
    return header;
}

