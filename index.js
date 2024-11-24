const times = document.querySelectorAll(".time")
let hour = document.querySelector(".hour")
let minute = document.querySelector(".minute")
let second = document.querySelector(".seconds")

// let html = 

times.forEach((time) => {
    time.contentEditable = true
    time.addEventListener("click", (e) => {
        if (hour.innerText == "hh") {
            hour.innerText = "00"
            minute.innerText = "00"
            second.innerText = "00"

        }
        time.innerText = ""
    })
    time.addEventListener("input", (e) => {
        let val = +e.target.innerText
        console.log(val)
        if (val > 60 && e.target != hour) {
            e.target.innerText = "60"

        }
    })
})

const mainContainer = document.querySelector(".mainContainer")
const bool_para = document.querySelector(".bool_para")
// if(!document.querySelector(".stopBtn")) { bool_para.style.display="block"}
displayBoolPara()  

let setButton = document.querySelector(".bttn")

setButton.addEventListener("click", (e) => {
    displayBoolPara()
    // if(document.querySelector(".stopBtn")){bool_para.style.display="none"}
    let hours = parseInt(hour.innerText) || 0;
    let minutes = parseInt(minute.innerText) || 0;
    let seconds = parseInt(second.innerText) || 0;

    if (hours === 0 && minutes === 0 && seconds === 0) {
        alert("Please set a valid time!");
        return;
    }
    const timerDisplay = document.createElement("div");
    timerDisplay.innerHTML = document.querySelector(".timer-container").innerHTML
    timerDisplay.classList.add("timer-container");

    let timeHead = timerDisplay.querySelector(".time-head")
    //   console.log(timerDisplay)
    timeHead.innerText = "Time Left:"
    //   console.log(timerDisplay)

    const hoursDiv = timerDisplay.querySelector(".hour")
    hoursDiv.innerText = `${hours.toString().padStart(2, "0")}`;
    const minutesDiv = timerDisplay.querySelector(".minute")
    minutesDiv.innerText = `${minutes.toString().padStart(2, "0")}`;
    const secondsDiv = timerDisplay.querySelector(".seconds")
    secondsDiv.innerText = `${seconds.toString().padStart(2, "0")}`;
    let deletes = timerDisplay.querySelector(".bttn")
    deletes.innerText = "Delete"
    displayBoolPara()
    // console.log(mainContainer.childNodes[1]);
    mainContainer.appendChild(timerDisplay);
    deletes.addEventListener("click", (e) => {
        timerDisplay.remove()
        
    })
    

    const timerInterval = setInterval(() => {
        if (seconds > 0) {
            seconds--;
        } else if (minutes > 0) {
            minutes--;
            seconds = 59;
        } else if (hours > 0) {
            hours--;
            minutes = 59;
            seconds = 59;
        } else {
            clearInterval(timerInterval);
            //   alert("Time's up!");

            timerDisplay.classList.add("stopCont")
            timerDisplay.innerHTML = `
            <div class="plainDiv"></div>
            <div class="timerHeading">
                Timer Is Up!
                </div>
                <div>
                    <button class="stopBtn">Stop</button> 
                 </div>`

            let bbttn = timerDisplay.querySelector(".stopBtn")
            bbttn.addEventListener("click", (e) => {
                displayBoolPara()
                timerDisplay.remove()
                
            })
        }


        hoursDiv.innerText = `${hours.toString().padStart(2, "0")}`;
        minutesDiv.innerText = `${minutes.toString().padStart(2, "0")}`;
        secondsDiv.innerText = `${seconds.toString().padStart(2, "0")}`;
    }, 1000);
})

function displayBoolPara(){
    if(!document.querySelector(".stopBtn")) { bool_para.style.display="block"}
        if(document.querySelector(".stopBtn")){bool_para.style.display="none"}
}


// function genHtml(hh, mm, ss) {
//     `<div class="timer-container">
//         <div class="time-head">Time Left:</div>
//         <div class="timer">
//             <div class="hour">${hh}</div>
//             <span>:</span>
//             <div class="minute">${mm}</div>
//             <span>:</span>
//             <div class="seconds">${ss}</div>
//         </div>
//         <div>
//            <button class="btn">Delete</button> 
//         </div>
//     </div>`
// }