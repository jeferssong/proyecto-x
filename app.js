const button = document.querySelector('.button')
const nav    = document.querySelector('.nav')
button.addEventListener('click',()=>{
    nav.classList.toggle('activo')
})
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}