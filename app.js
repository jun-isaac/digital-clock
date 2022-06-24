$(function () {
    setInterval(function () {
        // app.js
        let d = new Date();
        let h = d.getHours(); // 시간
        let m = d.getMinutes(); // 분
        let s = d.getSeconds(); // 초
        let t = d.getHours();
        let da = d.getDay();

        // 0 ~ 9까지는 앞에 0을 표시??
        if (s < 10) {
            s = '0' + s;
        };
        if (m < 10) {
            m = '0' + m;
        };
        if (h < 10) {
            h = '0' + h;
        };
        if (t < 12) {
            t = 'AM';
        };
        if (t >= 12) {
            t = 'PM';
        };
        // if (m == 50 & s == 01) {
        //     alert('휴식시간');
        // };
        if (da == 0) {
            da = 'SUN';
        };
        if (da == 1) {
            da = 'MON';
        };
        if (da == 2) {
            da = 'TUE';
        };
        if (da == 3) {
            da = 'WED';
        };
        if (da == 4) {
            da = 'THU';
        };
        if (da == 5) {
            da = 'FRI';
        };
        if (da == 6) {
            da = 'SAT';
        };

        /* 과제:
        1) 오전/오후 표시?? - 24시간제 if()
        2) 알람기능: 50분이 되면 '휴식시간' 경고창 띄우기
        */

        // 응용작품 만들기


        // 시간표시
        $('.hour').html(h);
        $('.min').html(m);
        $('.sec').html(s);
        $('.time').html(t);
        $('.day').html(da);

        // 시간재생 - 매 1초마다 재생
    }, 1000);
})

// Audio 객체 설정
const myAudio = new Audio();
myAudio.src = "./music/bg-bgm.mp3";

// 오디오 재생: 크롬브라우저에서 작동 안함
// myAudio.play();

// 버튼 취득
const btnPlay = document.getElementById("btnPlay");
const btnPause = document.getElementById("btnPause");
const btnStop = document.getElementById("btnStop");

// 재생 버튼
btnPlay.onclick = function () {
    myAudio.play();
};

// 일시정지 버튼
btnPause.onclick = function () {
    myAudio.pause();
};

// 정지 버튼
// btnStop.onclick = function () {
//     myAudio.pause();
//     myAudio.currentTime = 0; // 재생시간을 처음으로 설정
// };