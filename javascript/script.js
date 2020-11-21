function showUpNav() {

   const navList = document.querySelector(".nav__list");
   const menuBtn = document.querySelector(".nav__menuBtn");

   menuBtn.addEventListener("click", function() {
      navList.classList.toggle("isCollapse");
   })

};

showUpNav();