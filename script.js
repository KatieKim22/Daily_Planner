let currentDate = $('#currentDay')
currentDate.text(dayjs().format('dddd, MMMM D, YYYY'))

const d = new Date();
let currentTime = d.getHours();

console.log('current tme ' + currentTime)

// change row color by time

var buttons = $('.saveBtn')
// function hourUpdater() {


for (var i = 0; i < buttons.length; i++) {
    const element = buttons[i];
    var timeCell = parseInt(element.dataset.timeslot);

    console.log(typeof timeCell)
    console.log('Timecell ' + timeCell)

    var currentTimeCell = $('.' + timeCell)

    if (currentTime == timeCell) {
        currentTimeCell.addClass('present');
    } else if (currentTime < timeCell) {
        currentTimeCell.addClass('future');
    } else {
        currentTimeCell.addClass('past');
    }
}


var buttons = $('.saveBtn');
for (var i = 0; i < buttons.length; i++) {
    const element = buttons[i];

    let storedValue = '';
    let localStorageName = 'time-' + element.dataset.timeslot;
    const thisTextArea = $('textarea.' + element.dataset.timeslot);
    console.log('thisTextArea ' + thisTextArea)
    if (localStorage.getItem(localStorageName)) {
        storedValue = localStorage.getItem(localStorageName)
    }
    if (thisTextArea.length > 0) {
        thisTextArea[0].textContent = storedValue;
    }
};


// get input and save the change to local storage

const saved = $('.form-control')
const save_btn = $('.saveBtn')
const mySchedule = $('.schedule')

save_btn.click(function (e) {
    e.preventDefault();
    let scheduleValue = saved.val()
    console.log(scheduleValue)
    console.log(e.target)
    let localStorageName = 'time-' + e.target.dataset.timeslot;

    localStorage.setItem(localStorageName, scheduleValue)
    let inputSchedule = localStorage.getItem(localStorageName)
    // add Id to the div and append(or text input)



})



