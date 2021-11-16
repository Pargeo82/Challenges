const d = new Date();

// set days
const day = ['Nedjelja', 'Ponedjeljak', 'Utorak', 'Srijeda', 'Četvrtak', 'Petak', 'Subota'];
let currentDay = day[d.getDay()];

// function that adds 0 infront on 1 digit numbers
const addZero = (num) => {
    if (num < 10) {
        return '0' + num
    } else return num
};

// time variable
let currentTime = `${addZero(d.getHours())} : ${addZero(d.getMinutes())} : ${addZero(d.getSeconds())}`;

// get the numbers into spans in html
document.getElementById('currDay').innerHTML = currentDay;
document.getElementById('currTime').innerHTML = currentTime;


