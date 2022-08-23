
/*Slide img hover*/
const roomSlideHover = document.getElementsByClassName("room-slide");
const detailgalleryHover = document.querySelector('.detail_gallery');
console.log(roomSlideHover);
for (let i = 0; i < roomSlideHover.length; i++) {
    roomSlideHover[i].onmouseover = function() {
        roomSlideHover[i].classList.add('is-hover');
        detailgalleryHover.classList.add('is-hovering');
    }
    roomSlideHover[i].onmouseout = function() {
        roomSlideHover[i].classList.remove('is-hover');
        detailgalleryHover.classList.remove('is-hovering');
    }
};
//Scroll booking
const bodyActive = document.querySelector('body');

function ScrollBooking() {
    const bookingnav = document.querySelector('.booking_bar');
    const sticky = document.querySelector('.detail-content').offsetTop;
    if (window.pageYOffset >= sticky) {
        bookingnav.classList.add("is-active");
        bodyActive.classList.add("is-active-bookingbar");
    } else {
        bookingnav.classList.remove("is-active");
        bodyActive.classList.remove("is-active-bookingbar");
    }
};
window.addEventListener('scroll', ScrollBooking);
//booking li click
const sections = document.querySelectorAll('div[id]');

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 80,
            sectionId = current.getAttribute('id');
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.booking-nav a[href*=' + sectionId + ']');
            document.querySelector('.booking-nav a[href*=' + sectionId + ']').parentElement.classList.add('active-link');
        } else {
            document.querySelector('.booking-nav a[href*=' + sectionId + ']').parentElement.classList.remove('active-link');
        }
    })
};
window.addEventListener('scroll', scrollActive);
    /*click short*/
const clickShort = document.querySelector('.show-pointer');
const detailIntro_dot = document.querySelector('.dot');
clickShort.onclick = () => {
    if (clickShort.innerHTML == 'Đọc thêm') {
        clickShort.innerHTML = 'Thu gọn';
        detailIntro_dot.classList.remove('dot');

    } else {
        clickShort.innerHTML = 'Đọc thêm';
        detailIntro_dot.classList.add('dot');
    }

};

/*Dropdown-booking-time*/
const bookingtime_title1 = document.querySelector('.bk-title-1');
const bookingtime_title2 = document.querySelector('.bk-title-2');
const asd_activeFirt = document.querySelector('.asd_active-first');
const asd_activeLast = document.querySelector('.asd_active-last');
//function
bookingtime_title1.onclick = function() {
    asd_activeFirt.classList.toggle('datepicker-open');
}

bookingtime_title2.onclick = function() {
    asd_activeLast.classList.toggle('datepicker-open');
}

/*Dropdown SL Khách*/
const bookingCustomer = document.querySelector('.booking-customer');
const customerQuantity = document.querySelector('.customer-quantity');
bookingCustomer.onclick = function() {
    customerQuantity.classList.toggle('datepicker-open');
}