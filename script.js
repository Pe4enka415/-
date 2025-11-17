// Функция для форматирования даты
function formatDate(date) {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
}

// Установка даты создания сайта (сегодняшняя дата)
const creationDate = new Date();
document.getElementById('creation-date').textContent = formatDate(creationDate);

// Установка даты последнего обновления (сегодняшняя дата)
const updateDate = new Date();
document.getElementById('update-date').textContent = formatDate(updateDate);

// Анимация появления элементов при скролле
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, observerOptions);

// Наблюдаем за всеми анимированными элементами
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('section, .benefit-card, .news-item, .stat-card');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
});