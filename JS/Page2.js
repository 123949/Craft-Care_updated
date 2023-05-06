const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');

menuToggle.addEventListener('click', () => {
  navigation.classList.toggle('active');
});

// ==================================
// Craft section JS 
// =================================


const scrollWrapper = document.querySelector(".scroll-wrapper");
const scrollLeftBtn = document.querySelector(".scroll-left");
const scrollRightBtn = document.querySelector(".scroll-right");

// Add event listener to scroll left button
scrollLeftBtn.addEventListener("click", () => {
  // Use the scrollLeft property to move the scrollWrapper left by 400 pixels
  scrollWrapper.scrollLeft -= 400;
});

// Add event listener to scroll right button
scrollRightBtn.addEventListener("click", () => {
  // Use the scrollLeft property to move the scrollWrapper right by 400 pixels
  scrollWrapper.scrollLeft += 400;
});


// ============================================
//     Footer
//      ============================================

const footer = document.querySelector("footer");
const footerHeight = footer.offsetHeight;
document.body.style.paddingBottom = footerHeight + "px";

