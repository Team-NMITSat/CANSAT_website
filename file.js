var typeData = new Typed(".role", {
    strings: [
      "Welcome to Team NMITSat",
    ],
    loop: true,
    typeSpeed: 70,
    backSpeed: 60,
    backDelay: 1500,
  });

  burger = document.querySelector('.burger')
  navbar = document.querySelector('.navbar')
  navList = document.querySelector('.nav-list')
  
  burger.addEventListener('click', ()=>{
      navList.classList.toggle('v-class-resp');
      navbar.classList.toggle('height-nav-resp');
  })

  // AOS.init({
  //   disable: function() {
  //     var maxWidth = 1240;
  //     return window.innerWidth < maxWidth;
  //   }
  // });

  // For slider part
const slideBar = document.querySelector(".slidebar");
arrowIcons = document.querySelectorAll(".icons i");

let isDragging = false;

arrowIcons.forEach(icon =>{
    icon.addEventListener("click", ()=>{
        slideBar.scrollLeft += icon.id === "left" ? -400 : 400;
    });
})

const dragging = (e)=>{
    if(!isDragging) return;
    slideBar.classList.add("dragging");
    slideBar.scrollLeft -= e.movementX;
}

const dragstop = ()=>{
    isDragging = false;
    slideBar.classList.remove("dragging");
}

slideBar.addEventListener("mousemove",dragging);
slideBar.addEventListener("mousedown", ()=> isDragging = true);
document.addEventListener("mouseup", dragstop);
  


