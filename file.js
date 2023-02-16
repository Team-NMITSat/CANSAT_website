var typeData = new Typed(".role", {
    strings: [
      "Hii!!     ",
      "Welcome to NMITSAT Website!",
    ],
    loop: true,
    typeSpeed: 70,
    backSpeed: 60,
    backDelay: 1500,
  });

  burger = document.querySelector('.burger')
  navbar = document.querySelector('.navbar')
  navList = document.querySelector('.nav-list')
  rightnav = document.querySelector('.rightnav')
  
  burger.addEventListener('click', ()=>{
      navList.classList.toggle('v-class-resp');
      navbar.classList.toggle('height-nav-resp');
  })
