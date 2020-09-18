

var refresh = setInterval(count,1000)

function count(){
    let d = new Date();
    var time =  d.getHours() + ":" + d.getMinutes() +":"+ d.getSeconds();
    const newClock = document.getElementById("clock");
    newClock.innerText = time;

    
        var DayMonthYear= d.getDay() + "/" + d.getMonth()  +"/"+ d.getFullYear();
        const DMYdate= document.getElementById("Date");
        DMYdate.innerText = DayMonthYear;
        console.log (DayMonthYear)
    // console.log (d)

}
 function date(){
     var DayMonthYear= d.getDay() + " " + d.getMonth() 
    //  +" "+x.getFullYear;
     const DMYdate= document.getElementById("Date");
     DMYdate.innerText = DayMonthYear;
     console.log (DayMonthYear)
 }

 function dateLocal(){
     const local = document.getElementById("localDate");
     
 }
// var twhr = document.querySelector(".twhr");

// twhr.addEventListener("click","twelvehr");

// var refresh = setInterval(twelvehr,1000)
// function twelvehr(){
//     let h = new Date();

//     var hours = new Date().getHours()%12);
//     var mins = h.getMinutes();


    // hours = hours % 12;
    // if (hours === 0){
    //     hours = 12;
    // }
//     var Twtime =  (h.getHours()%12) + ":" + h.getMinutes() +":"+ h.getSeconds();
//     const twClock = document.getElementById("clock");
//     twClock.innerText = Twtime;
 




