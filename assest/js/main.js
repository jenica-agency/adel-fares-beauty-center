
function changeNavcColor (){
    let navbar = document.querySelector(".custom-nav");
    let scroll = window.scrollY;
    if(scroll < 200){
        navbar.classList.remove("scroll-nav");
    }else{
        navbar.classList.add("scroll-nav");
    }
}
window.addEventListener('scroll', changeNavcColor);
