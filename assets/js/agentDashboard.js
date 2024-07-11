const agentJsonData = agentsData[3];
function dataBindingHandle(data) {
    customerChartHandle();
    callsVolumeChartHandle();

    // total Calls data binding
    const callsArr = data?.calls;
    // console.log(callsArr);
    totalCallSectionBind(callsArr);
    //customer Data binding
    customerSectionBind(callsArr);
}
dataBindingHandle(agentJsonData);

function totalCallSectionBind(callData) {
    const isOpenArr = callData?.filter((item) => (item.currentStatus.toLowerCase() === "open"))
    const isClosedArr = callData?.filter((item) => (item.currentStatus.toLowerCase() === "closed"))
    const isForwardedArr = callData?.filter((item) => (item.currentStatus.toLowerCase() === "forwarded"))
    const totalParentEle = document.querySelector(`[data-total-calls]`);
    totalParentEle.innerHTML = `<li>
                      <span>${isOpenArr.length}</span>
                      <p>Open</p>
                    </li>
                    <li>
                      <span>${isClosedArr.length}</span>
                      <p>closed</p>
                    </li>
                    <li>
                      <span>${isForwardedArr.length}</span>
                      <p>Forwarded</p>
                    </li>`;
    const chartData = [
        ["Open", isOpenArr.length],
        ["Closed", isClosedArr.length],
        ["Forworded", isForwardedArr.length],
    ];
    const totalCalls = callData.length;
    totalCallChartHandle(chartData, totalCalls);
};

function customerSectionBind(callData) {
    const isHappyArr = callData?.filter((item) => (item.customer_satisfaction.toLowerCase() === "happy"));
    const isNeutralArr = callData?.filter((item) => (item.customer_satisfaction.toLowerCase() === "neutral"));
    const isUnhappyArr = callData?.filter((item) => (item.customer_satisfaction.toLowerCase() === "unhappy"));
    const totalParentEle = document.querySelector(`[data-customer-calls]`);
    totalParentEle.innerHTML = `
                            <li>
                            <span>${callData.length}K</span>
                            <p>Incomming Calls</p>
                            </li>
                            <li>
                            <span>${callData.length - 1}K</span>
                            <p>Answered Calls</p>
                            </li>
                            <li>
                            <span>${callData.length - 5}K</span>
                            <p>Forwarded Calls</p>
                            </li>
                        `;
    const chartData = [
        ["Happy", isHappyArr.length],
        ["Neutral", isNeutralArr.length],
        ["Unhappy", isUnhappyArr.length],
    ];
    customerChartHandle(chartData);
}

//chart calling function
function totalCallChartHandle(chartData, totalCalls) {
    Highcharts.chart('totalCallChart', {
        chart: {
            type: "pie",
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false,
            backgroundColor: null,
            margin: -8,
            padding: 0,
            plotBorderWidth: 0,
        },
        credits: {
            enabled: false,
        },
        exporting: {
            enabled: false,
        },
        legend: {
            enabled: false,
        },
        yAxis: {
            max: 100,
            tickWidth: 7,
            tickPixelInterval: 10,
            tickLength: 20,
        },
        plotOptions: {
            pie: {
                pointInterval: 10,
                borderColor: "#fff",
                borderWidth: 10,
                dataLabels: {
                    enabled: false,
                },
                startAngle: 0,
                endAngle: 360,
                center: ["50%", "50%"],
                size: "80%",
                showInLegend: {
                    enabled: true,
                    aligh: "top",
                },
            },
        },
        title: {
            useHTML: true,
            text: `<div style='text-align:center;'><p style='color:var(--bgBlack);font-size:var(--fs50);'>${totalCalls}</p><p style='color:var(--bgGray);font-size:var(--fs20); font-weight:400;line-height:100%'>Calls</p></div>`,
            align: "center",
            verticalAlign: "middle",
            style: {
                color: "gray",
                fontSize: 20,
                fontWeight: 600,
            },
        },
        series: [
            {
                name: "",
                innerSize: "75%",
                data: chartData,
                colorByPoint: true,
                colors: ["#EBEBEB", "#EBEBEB", "#EBEBEB"],
            },
        ],
    });
}

function customerChartHandle(chartData) {
    Highcharts.chart('customerChart', {
        chart: {
            type: "pie",
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false,
            backgroundColor: null,
            spacing: [0, 0, 0, 0],
            padding: 0,
            plotBorderWidth: 0,
        },
        credits: {
            enabled: false,
        },
        exporting: {
            enabled: false,
        },
        legend: {
            enabled: true,
            layout: "horizontal",
            symbolWidth: 10,
            symbolHeight: 10,
            symbolPadding: 5,
            symbolRadius: 0,
            float: true,
            y: 0,
            itemStyle: {
                fontSize: "12px",


            },
            labelFormatter: function () {
                // const formattedTotal = Number(
                //     this.userOptions.data[0].total
                // ).toLocaleString("en-US", {
                //     minimumFractionDigits: 0,
                //     maximumFractionDigits: 0,
                // });
                return (
                    `<div class='legendTextPart' style='display:flex;color:gray;border:2px solid red;'>
                    <p style="color:var(--bgBlack);fontWeight: 600;">${this.options.y}%</p>
                    <p style="color:gray;">${this.name}</p>
                    </div>`
                );
            },
            symbolWidth: 15,
        },
        yAxis: {
            max: 100,
            tickWidth: 7,
            tickPixelInterval: 10,
            tickLength: 20,
        },
        plotOptions: {
            pie: {
                pointInterval: 0,
                borderColor: "#fff",
                borderWidth: 0,
                dataLabels: {
                    enabled: false,
                },
                startAngle: 0,
                endAngle: 360,
                center: ["50%", "50%"],
                size: "70%",
                showInLegend: true,
            },
        },
        title: {
            text: ` `,
        },
        series: [
            {
                name: "",
                innerSize: "75%",
                data: chartData,
                colorByPoint: true,
                colors: ["#845ADF", "#A98BE9", "#CEBDF2"],
            },
        ],
    });
}

function callsVolumeChartHandle() {
    Highcharts.chart('callsVolumeChart', {
        chart: {
            type: "areaspline",
            backgroundColor: "transparent",
        },
        title: {
            text: "",
        },
        credits: {
            enabled: false,
        },
        legend: {
            symbolWidth: 14, // Set the width of the legend symbol
            symbolHeight: 24, // Set the height of the legend symbol
            symbolPadding: 5, // Set the padding between the symbol and the text
            symbolRadius: 0,
            itemStyle: {
                fontSize: "var(--fs14)",
                fontWeight: 500,
                color: "var(--bgGray)"
            },
            symbol: 'square',
        },
        plotOptions: {
            series: {
                marker: {
                    enabled: false,
                },

            },
        },
        xAxis: {
            allowDecimals: false,
            labels: {
                style: {
                    color: 'gray',
                }
            },
            categories: ['week 1', 'week 2', 'week 3', 'week 4', 'week 5', 'week 6', 'week 7'],

        },
        yAxis: {
            title: null,
            tickInterval: 20,
            labels: {
                style: {
                    fontSize: '10px', // Set the font size
                    color: '#333', // Set the font color
                }
            },
        },
        series: [
            {
                name: "Open",
                lineWidth: 2,
                data: [
                    10,
                    30,
                    35,
                    40,
                    30,
                    70,
                    20,

                ],
                zoneAxis: "x",
                zones: [
                    {
                        value: 6,
                        dashStyle: "solid",
                        // color: "#86CB62",
                        fillColor: "transparent",
                    },
                ],
                color: "#845ADF"
            },
            {
                name: "Closed",
                lineWidth: 2,
                data: [
                    20,
                    30,
                    35,
                    44,
                    45,
                    55,
                    55,

                ],
                zoneAxis: "x",
                zones: [
                    {
                        value: 6,
                        dashStyle: "solid",
                        // color: "#86CB62",
                        fillColor: "transparent",
                    },
                ],
                color: "#FA7F2B"
            },
            {
                name: "Forwarded",
                lineWidth: 2,
                data: [
                    5,
                    50,
                    10,
                    45,
                    10,
                    30,
                    40,

                ],
                zoneAxis: "x",
                zones: [
                    {
                        value: 6,
                        dashStyle: "solid",
                        // color: "#86CB62",
                        fillColor: "transparent",
                    },
                ],
                color: "#F72384"
            },
        ],

    });
}

//incoming modal
const callBtn = document.querySelectorAll("[data-call-popup]");
const callModal = document.querySelector("[data-call-modal]");

callBtn.forEach((item) => {
    item.addEventListener("click", () => {
        if (callModal.classList.contains("d-none")) {
            callModal.classList.replace("d-none", "d-flex");
            timerHandle(true);
            callStatusHighlight(true);

        } else {
            callModal.classList.replace("d-flex", "d-none");
            timerHandle(false);
            callStatusHighlight(false);
            openModal();
            chatModal.classList.remove("active")
        }
    })
})

const callstarted=document.getElementById("callstarted")

callstarted.addEventListener("click", () => {
    console.log("hello")
    console.log(Appconfig.service)
    fetch(`${Appconfig.service}`, {
        method: 'GET', // or 'GET' if you're making a GET request
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(response => response.json())
    .then(data => {
        localStorage.setItem("taskId",data.task_id)
    })
    .catch((error) => {
        console.error('Error:', error);
    });

    
});
const chatbutton = document.getElementById("chatbtn");
let pollingInterval;

chatbutton.addEventListener("click", () => {
    startPolling();
});

function startPolling() {
    if (pollingInterval) {
        clearInterval(pollingInterval);
    }

    pollingInterval = setInterval(() => {
        fetch(`${Appconfig.service1}/${localStorage.getItem("taskId")}`, {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.sentiment)
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }, 5000);
}


//timer function
let timeIntervals = [];
function timerHandle(val) {

    if (val) {
        console.log("if");
        const timers = document.querySelectorAll('[data-timer]');
        timers.forEach(timer => {
            let [minutes, seconds] = timer.textContent.split(':').map(Number);
            let totalSeconds = minutes * 60 + seconds;
            let intervalId = setInterval(() => {
                totalSeconds++;
                let mins = Math.floor(totalSeconds / 60);
                let secs = totalSeconds % 60;
                timer.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
            }, 1000);
            timeIntervals.push(intervalId);
        });

    } else {
        console.log("else");
        const timers = document.querySelectorAll('[data-timer]');
        timers.forEach(timer => {
            timer.textContent = `00:00`;
        });
        timeIntervals.forEach(intervalId => clearInterval(intervalId));
        timeIntervals = [];
    }
}

let timeoutId;
function callStatusHighlight(val) {
    const imgTag = document.querySelector("[data-call-status]");
    if (val) {
        timeoutId = setTimeout(() => {
            imgTag.classList.add("hotActive");
        }, 10000);
    } else {
        clearTimeout(timeoutId); // Clear the timeout if val is falsy
        imgTag.classList.remove("hotActive");
    }
}

//chart open
const chatbtn = document.querySelector("[data-chatbtn]");
const chatModal = document.querySelector("[data-chat-modal]");

chatbtn.addEventListener("click", () => {
    chatModal.classList.add("active")
    dynamicHeight();
})

function dynamicHeight() {
    const callModal = document.querySelector("[data-incomecall-modal]");
    const chatModal = document.querySelector("[data-chat-modal]");
    if (!(callModal && chatModal) || !chatModal.classList.contains("active")) {
        return;
    }
    const chatHeight = chatModal.clientHeight;
    callModal.style.height = `${chatHeight}px`;
}

window.addEventListener("resize", dynamicHeight);

const wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#d9d9d8',
    progressColor: 'black',
    barWidth: 2,
    barGap: 1,
    barRadius: 2,
    responsive: true,
    height: 120
})

wavesurfer.load('assets/audio/bouncing-joy.mp3');

const play_pause_button = document.getElementById('play-pause-button');
play_pause_button.addEventListener('click', () => {
    play_pause_button.classList.toggle('started');
    if (play_pause_button.classList.contains('started')) {
        play_pause_button.innerHTML = `<img src="assets/images/pauseBtn.png" alt="play button">`;
    }
    else {
        play_pause_button.innerHTML = `<img src="assets/images/playBtn.png" alt="play button">`;
    }
    wavesurfer.playPause();
})
wavesurfer.on('finish', () => {
    play_pause_button.innerHTML = `<img src="assets/images/playBtn.png" alt="play button">`;
    wavesurfer.stop();
})
function openModal() {
    document.getElementById('summary_modalOverlay').classList.add('open');
}

function closeModal() {
    document.getElementById('summary_modalOverlay').classList.remove('open');
    play_pause_button.innerHTML = `<img src="assets/images/playBtn.png" alt="play button">`;
    wavesurfer.stop();
}


// chatbot functionalities 
const chatHistory = [];
const msgSend = document.getElementById('msgSend');
const msgInput = document.getElementById('msgInput');
const chatInner = document.getElementsByClassName('chatInner')[0];
const chatContentBox = document.getElementsByClassName('chatContentBox')[0];
const chatBodyImg = document.getElementsByClassName('chatBodyImg')[0];
const chatBodyName = document.getElementsByClassName('chatBodyName')[0];
msgSend.addEventListener('click', (e) => {
    sendMsgTrigger();
});

msgInput.addEventListener('keydown', (e) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
        sendMsgTrigger();
    }
});

function sendMsgTrigger(val) {
    if (val) {
        msgBinder(val, true);
        botTrigger(val);
        return;
    }
    let input = msgInput.value;
    if (input === '') return;
    msgBinder(input, true);
    botTrigger(input);
};

function botTrigger(val) {
    let input = val.toLowerCase();
    let reply = '';
    if (input.includes('your name') || input.includes('u r name')) {
        reply = `See the chat page title`;
    }
    else if (input.includes(`i'll transfer call to you right away.`)) {
        reply = 'OK, I handle from now';
    }
    else if (input.includes(`i can handle this issue`)) {
        reply = 'Okay Sam carry on';
    }
    else if (input.includes('how are you') || input.includes('how r u')) {
        reply = 'I am doing well, thank you!';
    }
    else if (input.includes('how much') || input.includes('cost')) {
        reply = `it's just $500`;
    }
    else if (input.includes('available')) {
        reply = 'Yes it is available';
    }
    else if (input.includes('bye') || input.includes('later')) {
        reply = 'Bye , have a nice day !';
    }
    else if (input.includes('hello') || input.includes('hi') || input.includes('hai')) {
        reply = 'hi there!';
    }
    else if (input.includes('ok')) {
        reply = 'OK, contact me if u need our product';
    }

    else {
        reply = `I didn't understand what you meant.`;
    }
    msgBinder(reply, false);
    chatHistory.push([val, true]);
    chatHistory.push([reply, false]);
};

function inMessage(msg) {
    return `  <div class="chatIn">
    <div class="chatProfile">
        <div>
         <svg  viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" fill="#333333"/>
            <path d="M17.6865 19.8162C14.1208 17.5536 14.6403 13.4646 16.5763 11.5485C18.6412 9.50433 22.0703 9.46644 24.1534 11.5396C25.3759 12.7563 25.892 14.2472 25.6688 15.9345C25.4478 17.6074 24.5356 18.8834 23.0732 19.7818C23.7029 20.0339 24.3145 20.2365 24.8871 20.5169C27.2589 21.6778 28.9033 23.4754 29.6754 26.0005C30.0192 27.1235 30.0206 28.2858 29.9857 29.4454C29.9745 29.8174 29.7688 30.0021 29.4536 30C29.1286 29.9979 28.9368 29.7912 28.9187 29.4075C28.881 28.6179 28.9166 27.818 28.8001 27.0401C28.5358 25.2812 27.6376 23.844 26.293 22.681C24.9463 21.5166 23.3716 20.8359 21.5975 20.6216C18.9676 20.3033 16.5923 20.9186 14.5566 22.6162C12.9645 23.9446 12.0139 25.6305 11.8877 27.7195C11.8521 28.303 11.8514 28.8887 11.8263 29.4729C11.8117 29.8098 11.6199 29.9986 11.3124 30C11.0118 30.0014 10.7928 29.8057 10.7823 29.4791C10.7335 27.9585 10.7984 26.4566 11.4393 25.029C12.4672 22.7396 14.2023 21.1901 16.5107 20.2289C16.8824 20.0739 17.2723 19.9602 17.6865 19.8162ZM20.3805 19.4628C22.7238 19.4662 24.6437 17.5874 24.6514 15.2835C24.6597 12.9554 22.7475 11.0469 20.4028 11.0414C18.0422 11.0359 16.1306 12.9093 16.1146 15.2435C16.0992 17.5591 18.0199 19.4593 20.3805 19.4628Z" fill="white"/>
            </svg>
        </div>
        <p>${"John"}</p>
    </div>
    <span class="chatTextArea">${msg}</span>
    
</div>`;
};

function outMessage(msg) {
    return ` <div class="chatOut">
   <span class="chatTextArea">${msg}</span>
</div>`
};

function msgBinder(msg, who) {
    let div = document.createElement('div');
    div.className = 'chatTextSection';
    if (who) {
        div.innerHTML = outMessage(msg);
    }
    else {
        setTimeout(() => {
            div.innerHTML = inMessage(msg);
        }, 500);
    }

    chatInner.appendChild(div);

    chatContentBox.scrollTop = chatContentBox.scrollHeight;
    msgInput.value = '';
};

function chatClose() {
    const chatModal = document.querySelector("[data-chat-modal]");
    chatModal.classList.remove("active")
}

const promptTextEle = document.querySelectorAll("[data-prompt]");

promptTextEle.forEach((item) => {
    item.addEventListener("click", (e) => {
        const msg = e.target.innerHTML;
        // msgBinder(msg, true);
        sendMsgTrigger(msg)
    })
})