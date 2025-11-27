document.addEventListener('DOMContentLoaded', function() {
    
    // плавная прокрутка 
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // корректировка прокрутки с учетом высоты navbar
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // закрытие меню на мобильных устройствах
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    navbarCollapse.classList.remove('show');
                }
            }
        });
    });

    // переключение темы 
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    // применяем сохраненную тему или устанавливаем светлую
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        themeToggle.textContent = 'Change the theme (Dark)';
    } else {
        themeToggle.textContent = 'Change the theme (Light)';
    }

    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-theme');
        
        // сохраняем выбор в локальном хранилище и обновляем текст кнопки
        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
            themeToggle.textContent = 'Change the theme (Dark)';
        } else {
            localStorage.setItem('theme', 'light');
            themeToggle.textContent = 'Change the theme (Light)';
        }
    });
    
    // показать/скрыть описание 
    const detailsBtn = document.getElementById('details-btn');
    const detailsText = document.getElementById('character-details');
    
    // инициализируем, чтобы скрыть при загрузке
    detailsText.style.display = 'none'; 
    detailsBtn.textContent = 'Show/hide the description';


    detailsBtn.addEventListener('click', function() {
        // переключаем отображение
        if (detailsText.style.display === 'none') {
            detailsText.style.display = 'block';
            detailsBtn.textContent = 'Hide the description';
        } else {
            detailsText.style.display = 'none';
            detailsBtn.textContent = 'Show/hide the description';
        }
    });

});