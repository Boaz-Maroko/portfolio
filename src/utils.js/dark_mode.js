const darkMode = () => {
    // Get the theme button
    
    const themeBtn = document.querySelectorAll(".header__sun");

    const theme = localStorage.getItem('theme');

    theme && document.body.classList.add(theme);
    
    // handling the theme switching
    themeBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            document.body.classList.toggle('light__theme');
            if (document.body.classList.contains('light__theme')) {
                localStorage.setItem('theme', 'light__theme')
            } else {
                localStorage.removeItem('theme')
            }
        });
    })
}

export default darkMode;
