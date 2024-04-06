let menu = document.querySelector('#side-menu');
let sideBar = document.querySelector('.side-bar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    sideBar.classList.toggle('active');
}
