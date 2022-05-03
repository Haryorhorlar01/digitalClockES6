setInterval(digitalClock, 1000)

function digitalClock () {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let day = date.getDay();
    am_pm = "AM";

    if (h > 12) {
        h = h - 12;
        am_pm = 'PM';
    }

    if (h === 0) {
        h = 12;
        am_pm = "AM";
    }

    h = (h < 10) ? "0" + h: h;
    m = (m < 10) ? "0" + m: m;
    s = (s < 10) ? "0" + s: s;

    let weekDays = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

    let clock = `${weekDays [day]} ${h} : ${m} : ${s} ${am_pm}`;

    document.getElementById('demo').innerHTML = clock;

}

digitalClock();