//template_pw29noa

//service_p74x4lq

//5gnLbXD5Br8jEL3My

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


setTimeout(() => {


        }, 1000)
}