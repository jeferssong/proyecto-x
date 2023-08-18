const button = document.querySelector('.button')
const nav    = document.querySelector('.nav')
button.addEventListener('click',()=>{
    nav.classList.toggle('activo')
})
function myFunction() {
    var x = document.getElementById("mynav");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
}