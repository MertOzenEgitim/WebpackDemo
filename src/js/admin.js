import '../styles/main.scss';

const btn=document.getElementById('btn-admin-header');

btn.addEventListener('click',async ()=>{
    const module=await import('../components/AdminHeader');
    const Header=module.default();
    const app=document.getElementById('app');
    app.prepend(Header);
});