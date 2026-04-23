function handle() {
    alert('Форма отправлена!');
}

let button = document.querySelector('.btn');
button.addEventListener('click', handle);




let condition = true;

let start = 0;
let end = 0;

function forward() {
    anime({
        targets: '.menu-small',
        translateX: ['-100%', '0'],
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });

    condition = false
}

function backward() {
    anime({
        targets: '.menu-small',
        translateX: ['0', '-100%'],
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });

    condition = true
}


$('.menu_small_icon').click(function () {
    if (condition) {
        forward();
        rotate_menu();
        rotate_stick();
        $('body').css('overflow', 'hidden');
    } else {
        backward();
        rotate_menu2();
        rotate_stick2();
        $('body').css('overflow', 'auto');
    }
});

$('body').on('touchstart', function (event) {
    start = event.originalEvent.touches[0].pageX;
});

$('body').on('touchend', function (event) {
    end = event.originalEvent.changedTouches[0].pageX;
    if (end - start >= 100 && condition) {
        forward();
        rotate_menu();
        rotate_stick();
    }
    else if (start - end >= 100 && !condition) {
        backward();
        rotate_menu2();
        rotate_stick2();
    }
});


function rotate_menu(){

    
    anime({
        targets: '.menu_small_icon',
        rotate: 90,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });
        condition = false;
};

function rotate_stick(){
    anime({
        targets: '.stick',
        rotate: 180,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });
    condition = false;
};



function rotate_menu2(){
    anime({
        targets: '.menu_small_icon',
        rotate: -90,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });
        condition = true;
};

function rotate_stick2(){
    anime({
        targets: '.stick',
        rotate: -180,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });
    condition = true;
};