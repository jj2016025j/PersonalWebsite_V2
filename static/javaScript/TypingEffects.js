    // 打字特效
    const texts = ['前端工程師', '後端工程師', '全端工程師', '遊戲開發者', '3D建模師', '人像攝影師'];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';

    (function type() {
      if (count === texts.length) {
        count = 0;
      }
      currentText = texts[count];
      letter = currentText.slice(0, ++index);

      document.getElementById('typing').textContent = letter;
      if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 3000);
      } else {
        setTimeout(type, 150);
      }
    })();