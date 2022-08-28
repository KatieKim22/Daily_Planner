let currentDate = $('#currentDay')
currentDate.text(dayjs().format('dddd, MMMM D, YYYY'))

const d = new Date();
let currentTime = d.getHours();

console.log(currentTime)


// change row color by time

let classRow = $('div')
    .find('.row')
    .addClass('timeLine', timeSetting)

function timeSetting() {
    for (let i = 9; i < 24; i++) {

    }
}

console.log(classRow)


// get input and save the change to local storage



