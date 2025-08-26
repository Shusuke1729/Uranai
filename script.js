const fortuneBtn = document.getElementById('fortuneBtn');
fortuneBtn.addEventListener('click', function() {
    const results = [
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
