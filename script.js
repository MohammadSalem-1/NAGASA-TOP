// إضافة نجوم عائمة في الخلفية
window.onload = function() {
    const body = document.querySelector('body');
    
    // إنشاء عدد عشوائي من النجوم
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        body.appendChild(star);
    }
};

// التحقق من التسجيل
function validateLoginForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === "" || password === "") {
        alert("الرجاء ملء جميع الحقول");
        return false;
    }
    return true;
}
// إضافة نجوم عائمة في الخلفية
window.onload = function() {
    const body = document.querySelector('body');
    
    // إنشاء عدد عشوائي من النجوم
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        body.appendChild(star);
    }
};
// وظيفة لبدء اللعبة
function startGame(gameId) {
    let messageElement = document.getElementById("gameReactionMessage");

    switch (gameId) {
        case 'game1':
            messageElement.textContent = "بدأت لعبة الفضاء! استمتع بالتحدي!";
            break;
        case 'game2':
            messageElement.textContent = "بدأت لعبة الرياضة! حان الوقت للعب!";
            break;
        case 'game3':
            messageElement.textContent = "بدأت لعبة الدفاع! استعد للتحديات!";
            break;
        default:
            messageElement.textContent = "اختَر لعبة من القائمة!";
            break;
    }

    messageElement.style.display = "block";
}
// اللعبة الأساسية
let score = 0;
let target = document.getElementById('target');
let scoreDisplay = document.getElementById('score');

// وظيفة لزيادة النقاط عند النقر على الهدف
target.addEventListener('click', function() {
    score += 10;
    scoreDisplay.textContent = score;
    moveTarget(); // تحريك الهدف بعد النقر
});

// وظيفة لتحريك الهدف إلى مكان عشوائي
function moveTarget() {
    let gameArea = document.getElementById('gameArea');
    let maxX = gameArea.clientWidth - target.offsetWidth;
    let maxY = gameArea.clientHeight - target.offsetHeight;

    let randomX = Math.floor(Math.random() * maxX);
    let randomY = Math.floor(Math.random() * maxY);

    target.style.left = randomX + 'px';
    target.style.top = randomY + 'px';
}
