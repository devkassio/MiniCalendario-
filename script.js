const monthNameEl = document.getElementById("month-name");
const dayNameEl = document.getElementById("day-name");
const dayNumberEl = document.getElementById("day-number");
const yearEl = document.getElementById("year");

const date = new Date();
monthNameEl.innerText = date.toLocaleString("pt-BR", {
    month: "long"
});

dayNameEl.innerText = date.toLocaleString("pt-BR", {
    weekday: "long"
});

dayNumberEl.innerText = date.toLocaleString("pt-BR", {
    day: "numeric"
});

yearEl.innerText = date.toLocaleString("pt-BR", {
    year: "numeric"
});
