const navSlide = () => {
    const burguer = document.querySelector('.burger')
    const nav = document.querySelector('.menu')
    const navLinks = document.querySelectorAll('.menu li')

    burguer.addEventListener('click', () => {
         // Toggle nav
        nav.classList.toggle('nav-active')

        //Animate Links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
            }
        })
        // Burguer animation

        burguer.classList.toggle('toggle');

    })

    
}

navSlide()