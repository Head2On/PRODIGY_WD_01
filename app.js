//Toggel icon
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}
// Scroll sections
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => { 
  sections.forEach(section => {
      let top = window.scrollY;
      let offset = section.offsetTop - 100;
      let height = section.offsetHeight;
      let id = section.getAttribute('id');

      if (top >= offset && top < offset + height) {
          // Active navbar links
          navlinks.forEach(link => {
            link.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
        
      }
  });
 // Sticky header
 let header = document.querySelector('header');
 header.classList.toggle('sticky', window.scrollY > 100);

 //remove toggle icon and navbar when click any links(scroll)
 menuIcon.classList.remove('bx-x');
 navbar.classList.remove('active');
}
