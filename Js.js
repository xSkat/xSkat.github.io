
// Пример функции для отправки формы
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", event => {
            event.preventDefault();
            alert("Форма отправлена!");
            // Здесь можно добавить логику отправки формы на сервер
        });
    }
});