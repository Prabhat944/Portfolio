/*---------------------------- Menu Show Y Hide ---------------------------*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');
/*------- Menu Show -------*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}
/*------- Menu Hidden -------*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}
/*---------------------------- Remove Menu Mobile ---------------------------*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=>n.addEventListener('click',linkAction))

/*---------------------------- Accordian Skills ---------------------------*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i=0;i<skillsContent.length;i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach(e=>{
    e.addEventListener('click',toggleSkills)
})

/*---------------------------- Qualification Tabs ---------------------------*/
const tabs = document.querySelectorAll('[data-target'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab=>{
    tab.addEventListener('click',()=>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent=>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(obj=>{
            obj.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
}   ) 
/*---------------------------- Services Modal ---------------------------*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active__modal')
}

modalBtns.forEach((modalBtn, i)=>{
    modalBtn.addEventListener('click', () => {
        modal(i);
    })
})

modalCloses.forEach((modalClose)=>{
    modalClose.addEventListener('click', () =>{
        modalViews.forEach(view=> view.classList.remove('active__modal'))
    })
})
/*---------------------------- Portfolio Swiper ---------------------------*/
let swiper = new Swiper(".portfolio__container", {
    cssMode: true,
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable:true
    },
  });
/*---------------------------- Testimonial ---------------------------*/

/*---------------------------- Scroll Section Active Link ---------------------------*/

/*---------------------------- Change Background Header ---------------------------*/

/*---------------------------- Show Scroll up ---------------------------*/

/*---------------------------- Dark Light Theme ---------------------------*/
