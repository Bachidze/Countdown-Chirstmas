
const days = document.querySelector('#day');
const hour = document.querySelector('#hour');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

const currentyear = new Date().getFullYear();

const newyeartime = new Date(`January 1 ${currentyear + 1} 00:00:00`);

function updatecount() {
    const currenttime = new Date();
    const diff = newyeartime - currenttime;
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    days.innerHTML = d;
    hour.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
}

setInterval(updatecount, 1000);
