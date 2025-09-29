// 現在の日付と曜日を表示する関数
function displayCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    
    const dayNames = ['日', '月', '火', '水', '木', '金', '土'];
    const dayOfWeek = dayNames[today.getDay()];
    
    const dateString = `${year}年${month}月${date}日（${dayOfWeek}曜日）`;
    
    const dateDisplay = document.getElementById('dateDisplay');
    dateDisplay.textContent = dateString;
}

// ページ読み込み時に日付を表示
document.addEventListener('DOMContentLoaded', displayCurrentDate);

const fortuneBtn = document.getElementById('fortuneBtn');
fortuneBtn.addEventListener('click', function() {
    const results = [
        { text: '大吉', class: 'daikichi' },
        { text: '大凶', class: 'daikyo' },
        { text: '凶', class: 'kyo' }
    ];
    const result = results[Math.floor(Math.random() * results.length)];
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = result.text;
    resultDiv.className = 'result ' + result.class;
    fortuneBtn.disabled = true;
    fortuneBtn.textContent = '占い済み';
});
