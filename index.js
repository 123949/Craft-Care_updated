// gsap.to("#page1",{
//     scrollTrigger:{
//         trigger: `#page1`,
//         start: `top top`,
//         end: `bottom top`,
//         markers: true,
//         pin: true,
//         scroller:`#main`
//     }
// })
// gsap.to("#page2",{
//     scrollTrigger:{
//         trigger: `#page2`,
//         start: `top top`,
//         end: `bottom top`,
//         markers: true,
//         pin: true,
//         scroller:`#main`
//     }
// })
// gsap.to("#page3",{
//     scrollTrigger:{
//         trigger: `#page3`,
//         start: `top top`,
//         end: `bottom top`,
//         markers: true,
//         pin: true,
//         scroller:`#main`
//     }
// })
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const date = new Date().toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" });
const currentdate = date;
document.getElementById('btn').innerHTML = currentdate;


function myDarkModeFunction() {

    var element = document.body;
    element.classList.toggle("light-mode");

}


// ===============================
// JS Code for Banner
// ===============================

// function Banner() {
//     alert("Welcome To the Craft & Care");

// }

const banner = document.querySelector('.banner');
const closeBannerBtn = document.querySelector('.close-banner');

closeBannerBtn.addEventListener('click', () => {
    banner.style.display = 'none';
});
const visitButton = document.querySelector('.visit-button');

visitButton.addEventListener('click', () => {
  banner.style.display = 'none';
});
