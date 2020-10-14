var root = null;
var useHash = true; // Defaults to: false
var hash = '#!'; // Defaults to: '#'
window.router = new Navigo(root, useHash, hash);    
let $app = document.getElementById("app");
window.router.on('/login', function(){
    app.innerHTML = "<login-screen></login-screen>";
}).resolve()
window.router.on('/register', function(){
    app.innerHTML = " <register-screen></-screen>";
}).resolve()
window.router.on('/review', function(){
    app.innerHTML = `
    <header-component></header-component>
    <review-total></review-total>
    <footer-component></footer-component>`;
}).resolve()
window.router.on('/reviewTotal', function(){
    app.innerHTML = `
    <header-component></header-component>
    <total-review></total-review>
    <footer-component></footer-component>`;
}).resolve()

// window.router.on('/review', function(){

// })