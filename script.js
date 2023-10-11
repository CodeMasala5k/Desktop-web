setInterval(timeset,1000);
let date = new Date();

function dayname(){
    if (date.getDay() =="0"){
        return "Sunday";
    } else if (date.getDay() =="1"){
        return "Monday";
    } else if (date.getDay() =="2"){
        return "Tuesday";
    } else if (date.getDay() =="3"){
        return "Wednesday";
    } else if (date.getDay() =="4"){
        return "Thursday";
    } else if (date.getDay() =="5"){
        return "Friday";
    } else if (date.getDay() =="6"){
        return "Saturday";
    }
}

function timeset(){
    let hour = document.getElementById("hour");
    let min = document.getElementById("minute");
    let day = document.getElementById("day");

    hour.innerHTML = date.getHours();
    min.innerHTML = date.getMinutes();
    day.innerHTML = dayname() + " | "+ date.getDate() +"."+ (date.getMonth()+1) + "." + date.getFullYear();
}