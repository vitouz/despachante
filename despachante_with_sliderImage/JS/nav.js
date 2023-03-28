const navSlide = () => {
    const burguer = document.querySelector('.burger')
    const nav = document.querySelector('.navigation')
    const navLinks = document.querySelectorAll('.navigation-items a')

    burguer.addEventListener('click', () => {
         // Toggle nav
        nav.classList.toggle('active')
        // Burguer animation

        burguer.classList.toggle('toggle');

    })

    
}

navSlide()