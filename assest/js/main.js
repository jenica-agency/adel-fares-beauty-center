
// function change navbar background on scroll 
function changeNavcColor (){
    let navbar = document.querySelector(".custom-nav");
    let logoImg = document.querySelector(".logo-img");
    console.log(logoImg);
    let scroll = window.scrollY;
    if(scroll < 500){
        navbar.classList.remove("scroll-nav");
        logoImg.setAttribute("src","./assest/imgs/logo-black.png");
      
    }else{
        navbar.classList.add("scroll-nav");
        logoImg.setAttribute("src","./assest/imgs/logo.png");
    }
}
window.addEventListener('scroll', changeNavcColor);


