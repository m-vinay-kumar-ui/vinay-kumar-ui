// scroll to work

document.getElementById("viewWorkBtn").onclick=function(){

document.getElementById("work").scrollIntoView({
behavior:"smooth"
});

};


// navbar active

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{
if(pageYOffset>=section.offsetTop-200){
current=section.id;
}
});

navLinks.forEach(link=>{
link.classList.remove("active");

if(link.getAttribute("href")=="#"+current){
link.classList.add("active");
}

});

});


// animation

const cards=document.querySelectorAll(".card");

window.addEventListener("scroll",()=>{

cards.forEach(card=>{
if(card.getBoundingClientRect().top<window.innerHeight-100){
card.classList.add("show");
}
});

});