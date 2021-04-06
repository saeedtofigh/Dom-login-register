const btn = document.querySelector('#change-form').addEventListener('click', change)
const btnForget = document.querySelector('#btn-forget').addEventListener('click', forgetTemp)
const arrowBack = document.querySelector('#arrow-back').addEventListener('click', arrowback)
const theme = document.querySelector('#theme').addEventListener('click', changeTheme)
// functios
function change() {
    document.querySelector('#register').classList.toggle('active')
    document.querySelector('.login').classList.toggle('active')
    document.querySelector('.fa-user-plus').classList.toggle('active')
    document.querySelector('.circle').classList.toggle('active')
}
function forgetTemp() {
    document.querySelector('#register').classList.toggle('forget')
    document.querySelector('.login').classList.toggle('forget')
    document.querySelector('.circle').classList.toggle('forget')
    document.querySelector('.forget-pass').classList.toggle('forget')
    
}
function arrowback() {
    document.querySelector('#register').classList.toggle('forget')
    document.querySelector('.login').classList.toggle('forget')
    document.querySelector('.circle').classList.toggle('forget')
    document.querySelector('.forget-pass').classList.toggle('forget')
}
function changeTheme() {
    document.querySelector('.form').classList.toggle('dark')
    document.querySelector('.fa-moon-o').classList.toggle('dark')
    document.querySelector('.one-l').classList.toggle("dark");
    document.querySelector('.two-l').classList.toggle("dark");
    document.querySelector('.one-r').classList.toggle("dark");
    document.querySelector('.two-r').classList.toggle("dark");
    document.querySelector('.three-r').classList.toggle("dark");
    document.querySelector('.one-f').classList.toggle("dark");
    document.querySelector('.h1').classList.toggle("dark");
}