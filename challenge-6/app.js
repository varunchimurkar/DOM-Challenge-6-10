/**
 * Write your challenge solution here
 */

const digitalclocks = document.querySelector('.digital-clock')
const currentdate = document.querySelector('.date')
const handhour = document.querySelector(".hand.hour")
const handminute = document.querySelector(".hand.minute")
const handsecond = document.querySelector(".hand.second")
const clock = document.querySelector(".clock");


function dateformat() {

    const date = new Date()
    const weekday = date.toLocaleDateString('en-GB', { weekday: 'long' })
    const day = date.getDate()
    const month = date.toLocaleDateString('en-GB', { month: 'long' })
    const year = date.getFullYear()

    currentdate.textContent = `${weekday} ${day} ${month} ${year}`
}


function digitalclock() {

    const date = new Date() //gets current date
    const hours = String(date.getHours()).padStart(2, '0')
    const minute = String(date.getMinutes()).padStart(2, '0')
    const second = String(date.getSeconds()).padStart(2, '0')

    digitalclocks.textContent = `${hours}:${minute}:${second}`

}

function anlogclock() {

    const date = new Date()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()


    const sec = second * 6
    const min = minute * 6 + second * 0.1
    const hr = (hour % 12) * 30 + minute * 0.5

    handsecond.style.transform = `rotate(${sec}deg)`
    handminute.style.transform = `rotate(${min}deg)`
    handhour.style.transform = `rotate(${hr}deg)`

}

for (let i = 1; i <= 12; i++) {

    const number = document.createElement("div")
    number.className = 'number'
    number.style.setProperty("--rotation", `${i * 30}deg`)
    const span = document.createElement("span")
    span.innerText = i
    number.appendChild(span)
    clock.appendChild(number)
}

setInterval(digitalclock, 1000)
setInterval(anlogclock, 1000)
digitalclock()
dateformat()
anlogclock()



// Date() - hold/return current date and time
// padStart(targetLength, padString)