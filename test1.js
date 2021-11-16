const d = new Date();
const day = ['Nedjelja', 'Ponedjeljak', 'Utorak', 'Srijeda', 'Četvrtak', 'Petak', 'Subota'];
const addZero = (num) => {
    if (num < 10) {
        return '0' + num
    } else return num
};
let currentDay = day[d.getDay()];
let currentTime = `${addZero(d.getHours())} : ${addZero(d.getMinutes())} : ${addZero(d.getSeconds())}`;
document.getElementById('currDay').innerHTML = currentDay;
document.getElementById('currTime').innerHTML = currentTime;


