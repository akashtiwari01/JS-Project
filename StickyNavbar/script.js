const navbarEl=document.querySelector(".navbar")
const bottomContainerE1=document.querySelector(".bottom-container")
window.addEventListener("scroll",()=>{
    if(window.scrollY >  bottomContainerE1.offsetTop -navbarEl.offsetHeight-50 ){
    navbarEl.classList.add("active")
    }else{
        navbarEl.classList.remove("active")
    }
})