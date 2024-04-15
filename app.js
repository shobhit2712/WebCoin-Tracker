const daysEL = document.querySelector('.days')
const hoursEL = document.querySelector('.hours')
const minutesEL = document.querySelector('.minutes')
const secondsEL = document.querySelector('.seconds')


const target = 'April 20, 2024'

function countdown(){
const targetDate = new Date(target)
const currentDate = new Date()
const totalSeconds = Math.floor(targetDate - currentDate)/1000
const days = Math.floor(totalSeconds/3600/24)
const hours =Math.floor(totalSeconds/3600)%24
const minutes = Math.floor(totalSeconds/60)%60
const seconds = Math.floor(totalSeconds)%60
console.log(days,hours,minutes,seconds)
daysEL.innerHTML= days
hoursEL.innerHTML = formatTime(hours)
minutesEL.innerHTML = formatTime(minutes)
secondsEL.innerHTML = formatTime(seconds)
}


function formatTime(time){
    return time < 10?`0${time}`:time
}

countdown()
setInterval(countdown,1000)