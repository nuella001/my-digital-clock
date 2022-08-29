const hourEl = document.querySelector('#hour');
const columnEl = document.querySelector('#column');
const minuteEl = document.querySelector('#minute');
const secondEl = document.querySelector('#second');
const amorpmEl = document.querySelector('#amorpm');

function changeTime() {
    let date = new Date();
    // setTimeout(changeTime, 1000);
    let hour = date.getHours();
    console.log(hour);
    let minute = date.getMinutes();
    let second = date.getSeconds();
    hourEl.textContent = hour;
    minuteEl.textContent = minute;
    secondEl.textContent = second;
    let amorpm;

    if (hour >0 || hour  <12) {
        amorpm = 'AM'
    }
    else{
        amorpm = 'PM'
    }
    
    amorpmEl.textContent = amorpm;
}
setInterval(changeTime, 1000)
