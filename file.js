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

  AOS.init({
    disable: function() {
      var maxWidth = 1240;
      return window.innerWidth < maxWidth;
    }
  });
  
