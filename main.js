document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Отменяю стандартное поведение ссылки
        
        const targetId = this.getAttribute('href'); // Получаю ID целевого раздела
        const targetElement = document.querySelector(targetId); // Находим целевой элемент

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth', // Плавный скролл 
                block: 'start'      // Прокрутка до верха элемента
            });
        }
    });
});

const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll'); // Элементы с анимацией 

    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top; // Позиция элемента относительно окна
        const screenPosition = window.innerHeight/ 1.3; // Позиция при которой срабатывает анимация

        if  (elementPosition < screenPosition) {
            element.classList.add('visible'); // Добавляю класс 'visible'
        }
    });
};

//Запуск анимации при загрузке страницы и прокрутке 
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Обработка формы обратной связи 
const contactForm = document.querySelector('.contact-fotm');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Отменяю стандартую отправку формы

        // Получаю данные формы
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData('email');
        const message = formData.get('message');
        
        // Простая валидация
        if (!name || !email || !message) {
            alert('Пожалуйста заполните все поля.');
            return;
        }

        // Отправка данных
        console.log('Данные формы:', {name, email, message });
        alert('Спасибо! Ваше сообщение отправлено.');

        // Очистка формы
        this.reset();
    });
}

// Эффекты кнопки
const menuLinks =document.querySelectorAll('nav ul li a');


menuLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'scale(1.1);'  // Уввеличение размера
    });

    link.addEventListener('mouseleave', () => {
        link.style.transform = 'scale(1)';
    });
});

const currentPage = window.location.pathname.split('/').pop();

//  Добавляю класс 'active' для текущей страницы
menuLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
        link.classList.add('active');
    }
});