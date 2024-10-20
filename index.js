//template_pw29noa

//service_p74x4lq

//5gnLbXD5Br8jEL3My

let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1/20

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;
    console.log('hello')

    for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0;
        const oddInteger = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * oddInteger}px, ${y * oddInteger}px)`
    }
}


function toggleContrast() {
    contrastToggle = !contrastToggle
    if (contrastToggle) {
    document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }

}



function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";

    emailjs
        .sendForm(
            'service_p74x4lq',
            'template_pw29noa',
            event.target,
            '5gnLbXD5Br8jEL3My'
        ).then(() => {

            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
            console.log('it worked 1')
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unavailable. Please contact me directly through gmail.com on joseph8778@gmail.com"
            )
        })
    }


function toggleModal() {
    if (isModalOpen) {
        isModalOpen = !isModalOpen
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = !isModalOpen;
    // toggle modal
    window.scrollTo({
        top: 0,

        behavior: 'smooth'
    })

    document.body.classList += " modal--open"
}

