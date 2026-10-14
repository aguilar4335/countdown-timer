let para = document.getElementById("para");
let startBtn = document.getElementById("startBtn");
let resetBtn = document.getElementById("resetBtn");

let hrs = 1;
let mins = 0;
let secs = 0;

let timer = null;

startBtn.addEventListener("click", () => {
    
    if (timer !== null) {
        return;
    }
    
    
    timer = setInterval(() => {
        
        console.log(hrs + " : "  + mins + " : " + secs);

        let displayHrs = hrs;
        let displayMins = mins;
        let displaySecs = secs;
      
        if (displayHrs < 10) {
            displayHrs = "0" + displayHrs;
        }
        if (displayMins < 10) {
            displayMins = "0" + displayMins;
        }
        if (displaySecs < 10) {
            displaySecs = "0" + displaySecs;
        }    
        para.innerHTML = displayHrs + " : "  + displayMins + " : " + displaySecs;
        
      if (secs > 0) {
          secs--;
      } else if (mins > 0) {
          mins--;
          secs = 59;
      } else if (hrs > 0) {
          hrs--;
          mins = 59;
          secs = 59;
      } else {
        clearInterval(timer);
        timer = null;
        para.innerHTML = "Times Up!";
      }
    
    }, 6);

})

resetBtn.addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
    hrs = 1;
    mins = 0;
    secs = 0;
    para.innerHTML = "0" + hrs + " : 0"  + mins + " : 0" + secs;
})