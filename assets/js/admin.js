const agentDatas = [...agentsData]; // from Data.js //  ;
function openModal() {
  document.getElementById('summary_modalOverlay').classList.add('open');
}

function closeModal() {
  document.getElementById('summary_modalOverlay').classList.remove('open');
  play_pause_button.innerHTML = `<img src="assets/images/playBtn.png" alt="play button">`;
  wavesurfer.stop();
}
function openChatModal(val) {

  document.getElementById('chatAgentName').innerText = "Sam";
  document.getElementById('chatBox').classList.add('open');
}

function closeChatModal() {
  document.getElementById('chatBox').classList.remove('open');
}
function getImageSrc(status) {
  switch (status.toLowerCase()) {
    case 'good':
      return 'assets/images/happy.png';
    case 'normal':
      return 'assets/images/nutral.png';
    case 'hot':
    default:
      return 'assets/images/angry.png';
  }
}
function getAlertColor(status) {
  switch (status.toLowerCase()) {
    case 'good':
      return 'transparent';
    case 'normal':
      return 'orange';
    case 'hot':
      return 'red';
    default:
      return 'transparent';
  }
}
const ongoingAgentCalls = document.getElementById('ongoingAgentCalls');
const onGoingCallsCountEle = document.getElementById('onGoingCallsCountEle');
const onGoingRedCallsCountEle = document.getElementById('onGoingRedCallsCountEle');
let onGoingCallsCount = 0;
let onGoingRedCallsCount = 0;
agentDatas.forEach((agentData, i) => {
  if (agentData.ongoingCall) {
    ongoingAgentCalls.innerHTML += `
    <li class="ongoingAgentCall">
                  <div class="agentCallHead">
                    <div class="agentProfile">
                      <div class="agentProfileImg">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="20" cy="20" r="20" fill="#333333" />
                          <path
                            d="M17.6865 19.8162C14.1208 17.5536 14.6403 13.4646 16.5763 11.5485C18.6412 9.50433 22.0703 9.46644 24.1534 11.5396C25.3759 12.7563 25.892 14.2472 25.6688 15.9345C25.4478 17.6074 24.5356 18.8834 23.0732 19.7818C23.7029 20.0339 24.3145 20.2365 24.8871 20.5169C27.2589 21.6778 28.9033 23.4754 29.6754 26.0005C30.0192 27.1235 30.0206 28.2858 29.9857 29.4454C29.9745 29.8174 29.7688 30.0021 29.4536 30C29.1286 29.9979 28.9368 29.7912 28.9187 29.4075C28.881 28.6179 28.9166 27.818 28.8001 27.0401C28.5358 25.2812 27.6376 23.844 26.293 22.681C24.9463 21.5166 23.3716 20.8359 21.5975 20.6216C18.9676 20.3033 16.5923 20.9186 14.5566 22.6162C12.9645 23.9446 12.0139 25.6305 11.8877 27.7195C11.8521 28.303 11.8514 28.8887 11.8263 29.4729C11.8117 29.8098 11.6199 29.9986 11.3124 30C11.0118 30.0014 10.7928 29.8057 10.7823 29.4791C10.7335 27.9585 10.7984 26.4566 11.4393 25.029C12.4672 22.7396 14.2023 21.1901 16.5107 20.2289C16.8824 20.0739 17.2723 19.9602 17.6865 19.8162ZM20.3805 19.4628C22.7238 19.4662 24.6437 17.5874 24.6514 15.2835C24.6597 12.9554 22.7475 11.0469 20.4028 11.0414C18.0422 11.0359 16.1306 12.9093 16.1146 15.2435C16.0992 17.5591 18.0199 19.4593 20.3805 19.4628Z"
                            fill="white" />
                        </svg>
                      </div>
                      <div class="agentProfileName">
                        <h5>${agentData.ongoingCall.customerName}</h5>
                        <p>${agentData.ongoingCall.CustomerNumber}</p>
                      </div>
                    </div>
                    <div class="agentCallLog">
                      <div class="agentCallLogImg">
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M27.575 36.0003C25.2701 35.9349 22.997 35.2397 20.8163 34.2286C12.5367 30.3887 6.3845 24.3466 2.23547 16.272C1.1918 14.2406 0.385187 12.1039 0.0927128 9.81795C-0.208998 7.45939 0.179942 5.3145 2.06615 3.62558C2.91689 2.86393 3.6804 2.00516 4.50754 1.2159C5.92578 -0.136666 7.58416 -0.368739 9.08142 0.559554C9.34106 0.720063 9.59043 0.909198 9.80594 1.12389C11.4469 2.76374 13.1155 4.37905 14.7 6.07206C15.952 7.41032 15.9284 9.24339 14.7031 10.6041C13.8482 11.5539 12.9287 12.4464 12.0092 13.3359C11.7537 13.5833 11.7106 13.7652 11.8666 14.0781C12.7656 15.8805 14.0012 17.4396 15.3681 18.9015C17.2892 20.9565 19.3888 22.7875 21.9154 24.0879C22.2079 24.2382 22.3844 24.2269 22.6163 23.9877C23.3747 23.2026 24.1546 22.4368 24.9325 21.6701C25.9752 20.6446 27.1933 20.0946 28.6464 20.5956C29.2365 20.799 29.8081 21.1885 30.2648 21.622C31.762 23.042 33.208 24.5173 34.6652 25.9793C36.4437 27.7622 36.4437 29.7957 34.6714 31.6012C33.835 32.4528 32.9853 33.2921 32.1571 34.1519C30.939 35.4155 29.4397 35.9881 27.575 36.0003ZM28.2195 34.1949C28.8742 34.2276 29.9384 33.8176 30.8138 32.9251C31.6615 32.0592 32.5194 31.2035 33.3609 30.3314C34.4282 29.2262 34.4251 28.3695 33.3486 27.2889C31.9386 25.875 30.5224 24.4682 29.1041 23.0625C28.0389 22.0074 27.2271 22.0023 26.1568 23.0492C25.303 23.8845 24.4625 24.734 23.6128 25.5744C22.8513 26.3279 22.329 26.378 21.3643 25.8954C19.4094 24.916 17.6514 23.6595 16.0526 22.1843C13.6317 19.9515 11.4448 17.5285 10.0368 14.5054C9.58222 13.5281 9.6869 13.0251 10.4658 12.2747C11.3258 11.4455 12.195 10.6246 13.0242 9.76581C14.0063 8.74857 14.0022 7.93581 13.0149 6.9339C11.5649 5.46274 10.1005 4.0059 8.62578 2.56029C7.63137 1.58497 6.73342 1.59928 5.7308 2.5787C4.94984 3.34239 4.21506 4.1572 3.39921 4.88103C1.8804 6.22644 1.65258 7.92865 1.94197 9.78115C2.24266 11.7113 2.9097 13.5362 3.78918 15.2681C7.79967 23.1719 13.7846 29.0596 21.9113 32.7268C23.7267 33.5446 25.6119 34.1212 28.2195 34.1949Z"
                            fill="black" />
                        </svg>
                      </div>
                      <div class="agentCallLogTime">
                        <h4>02:20</h4>
                        <p>mins</p>
                      </div>
                    </div>
                  </div>
                  <div class="agentCallBody">
                    <ul>
                      <li><span>${agentData.calls.length}</span> calls</li>
                      <li>2 hrs</li>
                      <li>50 mins</li>
                    </ul>
                    <div class="callStatusEmoji">
                    
                      <img src=${getImageSrc(agentData.ongoingCall.callStatus)} alt="status angry">
                    </div>
                  </div>
                  <div class="agentCallFoot">
                    <div class="agentCallFootDetail">
                      <h5>Agent</h5>
                      <p>${agentData.name}</p>
                    </div>
                    <ul>
                      <li class="${agentData.ongoingCall.callStatus === "hot" ? "badgeActive" : " "}"  onclick="openChatModal()">
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_1190_1234)">
                            <path
                              d="M35.9963 20.0622C35.9963 24.902 35.9932 29.7417 36.0004 34.5815C36.0014 35.148 35.9002 35.6398 35.3297 35.8924C34.7378 36.1542 34.2931 35.9016 33.876 35.4813C31.9325 33.5221 29.9748 31.5772 28.0344 29.6139C27.7758 29.3521 27.5233 29.2396 27.1501 29.2407C19.9939 29.2519 12.8376 29.2529 5.68139 29.2478C3.03358 29.2458 0.848883 27.5575 0.186419 24.995C0.0688524 24.539 0.0126248 24.0553 0.0116025 23.5839C0.000356949 17.6194 -0.000665372 11.6548 0.00649087 5.69127C0.00853551 2.47535 2.48562 0.00587968 5.709 0.00383457C13.9049 -0.00127819 22.1009 -0.00127819 30.2968 0.00383457C33.5182 0.00587968 35.9901 2.47841 35.9952 5.69639C36.0014 10.485 35.9963 15.2736 35.9963 20.0622ZM33.6214 32.1007C33.6582 32.0772 33.696 32.0547 33.7328 32.0312C33.738 31.9198 33.7482 31.8083 33.7482 31.6968C33.7492 23.0552 33.7543 14.4126 33.7451 5.77103C33.7431 3.70139 32.3016 2.25652 30.2345 2.25447C22.0876 2.24425 13.9407 2.24629 5.79385 2.25345C3.69605 2.2555 2.25662 3.69525 2.25253 5.79251C2.24333 11.6906 2.23924 17.5877 2.26582 23.4857C2.26889 24.0451 2.4069 24.6515 2.65328 25.1525C3.30654 26.4828 4.47403 27.0054 5.91959 27.0043C13.2312 27.0013 20.5429 27.0054 27.8545 26.9962C28.3687 26.9951 28.7633 27.1547 29.1222 27.5218C30.3623 28.7877 31.6228 30.0331 32.871 31.2909C33.1317 31.5516 33.372 31.8298 33.6214 32.1007Z"
                              fill="black" />
                            <path
                              d="M12.3716 14.6171C12.3787 15.8421 11.3768 16.8616 10.1501 16.8759C8.9059 16.8912 7.87029 15.8605 7.87847 14.6161C7.88664 13.389 8.89976 12.3818 10.1255 12.3828C11.3523 12.3828 12.3644 13.39 12.3716 14.6171Z"
                              fill="black" />
                            <path
                              d="M17.9836 12.3751C19.2084 12.3659 20.2287 13.3669 20.246 14.594C20.2634 15.8374 19.2339 16.8753 17.9898 16.8692C16.763 16.863 15.755 15.8517 15.7529 14.6247C15.7509 13.3986 16.7569 12.3843 17.9836 12.3751Z"
                              fill="black" />
                            <path
                              d="M25.8597 16.8763C24.6329 16.8682 23.6259 15.8548 23.627 14.6288C23.628 13.3843 24.6707 12.3587 25.9129 12.3832C27.1396 12.4068 28.1364 13.4324 28.1201 14.6564C28.1037 15.8834 27.0855 16.8845 25.8597 16.8763Z"
                              fill="black" />
                          </g>
                          <defs>
                            <clipPath id="clip0_1190_1234">
                              <rect width="36" height="36" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                         <span class="badge"></span>
                      </li>
                      <li>
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M27.575 36.0003C25.2701 35.9349 22.997 35.2397 20.8163 34.2286C12.5367 30.3887 6.3845 24.3466 2.23547 16.272C1.1918 14.2406 0.385187 12.1039 0.0927128 9.81795C-0.208998 7.45939 0.179942 5.3145 2.06615 3.62558C2.91689 2.86393 3.6804 2.00516 4.50754 1.2159C5.92578 -0.136666 7.58416 -0.368739 9.08142 0.559554C9.34106 0.720063 9.59043 0.909198 9.80594 1.12389C11.4469 2.76374 13.1155 4.37905 14.7 6.07206C15.952 7.41032 15.9284 9.24339 14.7031 10.6041C13.8482 11.5539 12.9287 12.4464 12.0092 13.3359C11.7537 13.5833 11.7106 13.7652 11.8666 14.0781C12.7656 15.8805 14.0012 17.4396 15.3681 18.9015C17.2892 20.9565 19.3888 22.7875 21.9154 24.0879C22.2079 24.2382 22.3844 24.2269 22.6163 23.9877C23.3747 23.2026 24.1546 22.4368 24.9325 21.6701C25.9752 20.6446 27.1933 20.0946 28.6464 20.5956C29.2365 20.799 29.8081 21.1885 30.2648 21.622C31.762 23.042 33.208 24.5173 34.6652 25.9793C36.4437 27.7622 36.4437 29.7957 34.6714 31.6012C33.835 32.4528 32.9853 33.2921 32.1571 34.1519C30.939 35.4155 29.4397 35.9881 27.575 36.0003ZM28.2195 34.1949C28.8742 34.2276 29.9384 33.8176 30.8138 32.9251C31.6615 32.0592 32.5194 31.2035 33.3609 30.3314C34.4282 29.2262 34.4251 28.3695 33.3486 27.2889C31.9386 25.875 30.5224 24.4682 29.1041 23.0625C28.0389 22.0074 27.2271 22.0023 26.1568 23.0492C25.303 23.8845 24.4625 24.734 23.6128 25.5744C22.8513 26.3279 22.329 26.378 21.3643 25.8954C19.4094 24.916 17.6514 23.6595 16.0526 22.1843C13.6317 19.9515 11.4448 17.5285 10.0368 14.5054C9.58222 13.5281 9.6869 13.0251 10.4658 12.2747C11.3258 11.4455 12.195 10.6246 13.0242 9.76581C14.0063 8.74857 14.0022 7.93581 13.0149 6.9339C11.5649 5.46274 10.1005 4.0059 8.62578 2.56029C7.63137 1.58497 6.73342 1.59928 5.7308 2.5787C4.94984 3.34239 4.21506 4.1572 3.39921 4.88103C1.8804 6.22644 1.65258 7.92865 1.94197 9.78115C2.24266 11.7113 2.9097 13.5362 3.78918 15.2681C7.79967 23.1719 13.7846 29.0596 21.9113 32.7268C23.7267 33.5446 25.6119 34.1212 28.2195 34.1949Z"
                            fill="black" />
                        </svg>
                      </li>
                      <li>
                        <svg width="33" height="42" viewBox="0 0 33 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M15.4045 4.35467C15.4045 3.25976 15.394 2.27062 15.4075 1.28297C15.418 0.435343 15.8229 -0.0145383 16.5217 0.000358371C17.1906 0.0137654 17.576 0.450239 17.588 1.25764C17.603 2.26764 17.591 3.27913 17.591 4.35616C17.954 4.35616 18.2239 4.35616 18.4938 4.35616C21.4677 4.35616 24.4416 4.34871 27.4155 4.35765C30.5934 4.36808 32.9899 6.75602 32.9944 9.92753C33.0019 16.4076 33.0019 22.8877 32.9944 29.3677C32.9914 32.5214 30.6758 34.878 27.4995 34.9406C25.7014 34.9764 23.9017 34.963 22.1021 34.9391C21.6477 34.9332 21.3808 35.0851 21.1348 35.4605C19.9785 37.2273 18.7953 38.9761 17.615 40.728C16.8937 41.7976 16.1123 41.805 15.397 40.7474C14.2152 38.997 13.0305 37.2496 11.8772 35.4814C11.6132 35.0762 11.3268 34.9302 10.8454 34.9391C9.14625 34.9674 7.4471 34.96 5.74795 34.9481C2.30165 34.9227 0.00262446 32.6078 0.00112477 29.1711C-0.000374923 22.8147 -0.000374923 16.4597 0.00112477 10.1033C0.00262446 6.69048 2.34515 4.36212 5.78094 4.35914C8.67985 4.35616 11.5788 4.35914 14.4777 4.35914C14.7491 4.35467 15.0221 4.35467 15.4045 4.35467ZM30.7883 23.9885C30.7883 23.6995 30.7883 23.4552 30.7883 23.2124C30.7883 18.87 30.7913 14.5261 30.7868 10.1838C30.7838 7.85242 29.4761 6.55193 27.1306 6.55044C20.037 6.54449 12.942 6.5862 5.84843 6.52363C3.77585 6.50575 2.14269 8.01777 2.18318 10.1987C2.26566 14.5396 2.20717 18.8849 2.20867 23.2273C2.20867 23.4686 2.22967 23.71 2.24317 23.9871C11.7467 23.9885 21.2038 23.9885 30.7883 23.9885ZM30.7448 26.2663C21.2023 26.2663 11.7437 26.2663 2.20717 26.2663C2.20717 27.2494 2.25666 28.1894 2.19668 29.1234C2.0662 31.1494 3.5554 32.8432 5.87242 32.7836C7.76954 32.7344 9.67115 32.8074 11.5683 32.7582C12.3931 32.7359 12.9075 33.0309 13.3424 33.7146C14.3367 35.2788 15.3985 36.8012 16.4978 38.4369C17.552 36.8668 18.5943 35.4203 19.5181 33.9023C20.0535 33.0234 20.7044 32.724 21.7197 32.7508C23.8148 32.8044 25.9173 32.797 28.0109 32.6823C29.3831 32.6078 30.5934 31.4324 30.7193 30.0947C30.8378 28.8449 30.7448 27.5772 30.7448 26.2663Z"
                            fill="black" />
                          <path
                            d="M9.90652 18.5468C8.68727 18.5498 7.71997 17.6098 7.70047 16.4047C7.68097 15.1965 8.70376 14.1806 9.92751 14.1955C11.1198 14.2089 12.1096 15.2085 12.0961 16.3868C12.0826 17.5964 11.1228 18.5438 9.90652 18.5468Z"
                            fill="black" />
                          <path
                            d="M23.068 18.5482C21.8547 18.5363 20.8934 17.5695 20.8994 16.3673C20.9054 15.183 21.8937 14.2028 23.0905 14.1954C24.2827 14.1879 25.286 15.1681 25.2965 16.3509C25.3085 17.5844 24.3187 18.5601 23.068 18.5482Z"
                            fill="black" />
                        </svg>
                      </li>
                    </ul>
                  </div>
                  <span style="background-color: ${getAlertColor(agentData.ongoingCall.callStatus)};" class="ongoingCallStatusAlert ${getAlertColor(agentData.ongoingCall.callStatus)}"></span>
                </li>
     `
    onGoingCallsCount++;
    if (agentData.ongoingCall.callStatus === 'hot') onGoingRedCallsCount++;
  }
});
onGoingCallsCountEle.innerText = onGoingCallsCount;
onGoingRedCallsCountEle.innerText = onGoingRedCallsCount;

//audio function

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
        <p>${"Sam"}</p>
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