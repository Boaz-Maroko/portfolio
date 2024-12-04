const mobileNavigation = () => {
    // Defining rules for the nav button


    // The hamburger menu icon
    const hamMenu = document.querySelector('.header__ham');

    // Close mobile navigation btn

    const closeBtn = document.querySelector('.mobile-nav__close');

    // The mobile navigation menu
    const mobNav = document.querySelector('.mobile-nav');

    // Get the nav links
    const mobileNavLinks = document.querySelectorAll(".mobile__links");


    // state of the navbar
    let isNavBarOpen = false;


    // event listeners
    // listener on the the ham burger menu
    hamMenu.addEventListener('click', () => {
        if (!isNavBarOpen) {
            mobNav.style.display = 'flex';
            document.body.style.overflowY = 'hidden';
            isNavBarOpen = true;
        }
    });

    // Listener on the close btn
    closeBtn.addEventListener('click', () => {
        if (isNavBarOpen) {
            mobNav.style.display = 'none';
            isNavBarOpen = false;
            document.body.style.overflowY = 'auto';
        }
    });

    // listener on the nav bar links
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        })
    })
}

export default mobileNavigation;
