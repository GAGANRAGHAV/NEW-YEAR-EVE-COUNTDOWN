const daysE1= document.getElementById('days');
const hoursE1= document.getElementById('hours');
const minsE1= document.getElementById('mins');
const secondsE1= document.getElementById('secs');



const newYears="1 Jan 2024";

function countdown()
{
    const newYearsDate=new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate-currentDate)/1000;


    const days=Math.floor(totalSeconds /3600 /24);
    const hours=Math.floor(totalSeconds /3600)%24;
    const minutes = Math.floor(totalSeconds/60)%60;
    const Seconds = Math.floor(totalSeconds)%60;


    daysE1.innerHTML= days;
    hoursE1.innerHTML= hours;
    minsE1.innerHTML= minutes;
    secondsE1.innerHTML= Seconds;

    console.log(days,hours, Seconds, minutes)



}


countdown();

setInterval(countdown , 1000)

