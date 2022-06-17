
//! HTML de yazacağım tag in class ını seçiyoruz...
const time = document.querySelector('.time');

//! fonksiyonumuzu oluşturuyoruz...
function digitalClock() {
    let dateTime = new Date();
    let clock = dateTime.toLocaleTimeString();
    time.innerHTML = clock;
}

//! kaç milisaniyede çalışacağını belirliyoruz...
setInterval(digitalClock, 1000);
