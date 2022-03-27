/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header');
     else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SERVICES MODAL ===============*/

const modalViews = document.querySelectorAll('.services__modal');
const modalBtns = document.querySelectorAll('.services__button');
const modalClose = document.querySelectorAll('.services__modal');

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
};


modalBtns.forEach((mb,i) => {
    mb.addEventListener('click' , () => {
        modal(i)
    })
});

modalClose.forEach((mc) => {
    mc.addEventListener('click' , () => {
        modalViews.forEach((mv) => {
            mv.classList.remove('active-modal')
        })
    })
})

/*=============== MIXITUP FILTER PORTFOLIO ===============*/

        let mixerPortfolio = mixitup('.work__container', {
            selectors: {
                target: '.work__card'
            },
            animation: {
                duration: 300
            }
        });




/* Link active work */ 

const linkWork = document.querySelectorAll('.work__item');

function activeWork () {
    linkWork.forEach(link => link.classList.remove('active__work'));
    this.classList.add('active__work')
};

linkWork.forEach(link => link.addEventListener('click' , activeWork))




/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== LIGHT DARK THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/

