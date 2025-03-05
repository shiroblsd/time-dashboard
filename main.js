const timeData = {
    work: { daily: 5, weekly: 32, monthly: 103, prev: { daily: 7, weekly: 36, monthly: 128 } },
    play: { daily: 1, weekly: 10, monthly: 23, prev: { daily: 2, weekly: 8, monthly: 29 } },
    study: { daily: 0, weekly: 4, monthly: 13, prev: { daily: 1, weekly: 7, monthly: 19 } },
    exercise: { daily: 1, weekly: 4, monthly: 11, prev: { daily: 1, weekly: 5, monthly: 18 } },
    social: { daily: 1, weekly: 5, monthly: 11, prev: { daily: 3, weekly: 10, monthly: 21 } },
    self_care: { daily: 0, weekly: 2, monthly: 7, prev: { daily: 1, weekly: 2, monthly: 11 } }
};

const buttons = document.querySelectorAll(".text_button");

const updateTimeframes = (timeframe) => {
    document.querySelectorAll("article").forEach((el) => {
        // Получаем категорию из classList
        const category = [...el.classList].find(cls => cls.endsWith("_container"))?.replace("_container", "");

        if (timeData[category]) {
            el.querySelector(".main_time").textContent = `${timeData[category][timeframe]}hrs`;
            el.querySelector(".previous_time").textContent = `Last week - ${timeData[category].prev[timeframe]}hrs`;
        }
    });
};

// Добавляем обработчики событий на кнопки
buttons.forEach((btn) =>
    btn.addEventListener("click", (e) => {
        buttons.forEach((b) => b.classList.remove("active"));
        e.target.classList.add("active");
        updateTimeframes(e.target.textContent.toLowerCase());
    })
);

// Устанавливаем "Weekly" как значение по умолчанию
updateTimeframes("weekly");
