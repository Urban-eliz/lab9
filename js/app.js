// Вывод сообщений на экран
function logMessage(message) {
    const output = document.getElementById('output');
    const paragraph = document.createElement('p');
    paragraph.textContent = message;
    output.appendChild(paragraph);
}

// Имитация асинхронных задач
function simulateTask(taskName, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            logMessage(`Задача "${taskName}" завершена.`);
            resolve(taskName);
        }, delay);
    });
}

async function taskOne() {
    logMessage("Начинаем задачу 1...");
    await simulateTask("Загрузка данных 1", 2000);
}

async function taskTwo() {
    logMessage("Начинаем задачу 2...");
    await simulateTask("Загрузка данных 2", 3000);
}

async function taskThree() {
    logMessage("Начинаем задачу 3...");
    await simulateTask("Загрузка данных 3", 1000);
}

async function executeTasks() {
    logMessage("Запуск задач поочередно...");
    await taskOne();
    await taskTwo();
    await taskThree();
    logMessage("Все задачи выполнены!");
}

// Получение постов с публичного API
async function fetchPosts() {
    logMessage("Загрузка постов...");
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();

        console.log('Заголовки постов:');
        posts.slice(0, 5).forEach((post) => console.log(post.title)); // Выводим первые 5 постов в консоль
        logMessage("Посты успешно загружены! Проверьте консоль.");
    } catch (error) {
        logMessage("Ошибка при загрузке постов: " + error.message);
    }
}

// Навешиваем обработчики на кнопки
document.addEventListener('DOMContentLoaded', () => {5
    document.getElementById('runTasks').addEventListener('click', executeTasks);
    document.getElementById('fetchPosts').addEventListener('click', fetchPosts);
});
