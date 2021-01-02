// ----------------------
//   INVOKING FUNCTIONS
// ----------------------

showUpNav();
document.addEventListener("scroll", getStickyNav) 

// ----------------------
//      NAVIGATION
// ---------------------- 

function showUpNav() {

   const navList = document.querySelector(".pages-list");
   const menuBtn = document.querySelector(".menu-btn");

   menuBtn.addEventListener("click", function()  {
      navList.classList.toggle("isCollapse");
   });
};

const header = document.querySelector(".header");
let scrollValue

function getStickyNav() {

   scrollValue = window.scrollY;

   if(scrollValue > 0) {
      header.classList.add("isSticky")
   } else {
      header.classList.remove("isSticky")
   }
}

// ----------------------
//        HEADER
// ---------------------- 

function enlargeHeaderText() {
   document.querySelector(".header-section h1").classList.add("isEnlarge");
}

// ----------------------
//     PORTFOLIO PAGE
// ---------------------- 

// SCROLL EFFECTS

const scrollValues = [];
const tab = [...document.querySelectorAll('.activeElements')];

tab.forEach((element) => {
    const position  = element.offsetTop;
    const height = element.offsetHeight;
    const parentElem = element.offsetParent;
    const offsetParentElem = parentElem.offsetTop;
    const divisor = element.dataset.divisor;
    const activePosition = divisor? (position + height + offsetParentElem) / divisor : position + height + offsetParentElem;
    scrollValues.push({
        activator: activePosition,
        element
    });
})

window.addEventListener('scroll', () => {
    const scrollValue = window.scrollY;
    scrollValues.forEach(({
        element,
        activator
    }) => {
        if (scrollValue > activator && !element.classList.contains('active')) {

            element.classList.add('active');
        }
    })

})

