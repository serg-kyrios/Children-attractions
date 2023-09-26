'use strict';


setTimeout(() => (document.body.style.background = 'aqua'), 1000);

function update() {
    const clock = document.getElementById('clock');
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;
    clock.textContent = `${hours}:${minutes}:${seconds}`;
}
update();
setInterval(update, 1000);

let calendarBody = document.querySelector('.calendar .calendar-body');
let dayInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function genCalendar(date) {
    let curDay = date.getDate();
    date.setDate(1);
    let startDay = date.getDay();
    let daysTotal = !(date.getFullYear() % 4) && date.getMonth() === 1 ? 29 : dayInMonth[date.getMonth()];
    let content = '';
    for (let i = 0; i < startDay; i++) {
        content += '<div class="no-day"></div>';
    }
    for (let i = 1; i <= daysTotal; i++) {
        if (i === curDay) {
            content += '<div class="cur-day">' + i + '</div>';
        } else {
            content += '<div>' + i + '</div>';
        }
    }
    calendarBody.innerHTML = content;
}
genCalendar(new Date());


// ul.append(...getListContent());
// const List_of_visitors =  document.createElement(List_of_visitors);
// let div = document.createElement('div');
// let textNode = document.createTextNode('А вот и я');
// let List_of_visitors;
// let List_of_visitor;
//  List_of_visitors = List_of_visitor;
// let div = document.createElement('div');
// div.className = 'List_of_visitors';

// div.innerHTML = '<strong>Список відвідувачів</strong> Вы прочитали важное сообщение.';

// document.body.append(div);

// let div = document.createElement('div');
// div.className = 'number';
// div.innerHTML = '<strong>Всем привет!</strong> Вы прочитали важное сообщение.';

// document.body.append(div);

