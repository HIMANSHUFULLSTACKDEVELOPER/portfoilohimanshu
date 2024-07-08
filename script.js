// cursor stylee

// const coords = { x: 0, y: 0 };
// const circle = document.querySelectorAll(".circle");

// circle.forEach(function (circle) {
//     circle.x = 0;
//     circle.y = 0;
// });


// window.addEventListener("mousemove", function (e) {
//     coords.x = e.clientX;
//     coords.y = e.clientY;

//     animateCircles();

// });

// // function animateCircles() {
//     let x = coords.x = e.clientX;
//     let y = coords.y = e.clientY;

//     circle.forEach(function (circle, index) {
//         circle.style.left = x - 12 + "px";
//         circle.style.top = y - 12 + "px";
//         circle.x = x;
//         circle.y = y;

//         const nextCricle = circle[index + 1] || circle[0];
//         x += (nextCricle.x - x) * 0.5;
//         y += (nextCricle.y - y) * 0.5;
//     });
// }


// portfolio
var mixer = mixitup('.portfolio-gallery');
// menu
let menuli = document.querySelectorAll('header ul li a')
let section = document.querySelectorAll('section')

function activeMenu() {
    let len = section.length;
    while (--len && window.scrollY + 97 < section[len].offsetTop) { };
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");

}

activeMenu();
window.addEventListener("scroll", activeMenu);

//  sticky 
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", this.window.scrollY > 50)
})


// taggle
let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bxs-tag-x");
    navlist.classList.toggle("open");
}


menuIcon.onscroll = () => {
    menuIcon.classList.remove("bxs-tag-x");
    navlist.classList.replace("open");
}



// 
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-item");
        }
    })
})

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el) => observer.observe(el))


const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBotton.forEach((el) => observer.observe(el))


const scrollTOP = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el) => observer.observe(el))

