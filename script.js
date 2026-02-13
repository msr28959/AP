// script.js for animated Valentine app
const yesBtn = document.querySelector('.js-yes-btn');
const noBtn = document.querySelector('.js-no-btn');
const questionContainer = document.querySelector('.question-container');
const resultContainer = document.querySelector('.result-container');

// Hide result initially
resultContainer.style.display = 'none';

// Flirty message with poetry and animation
const poetry = `<div class="poetry">
  <p>ಕಾಯುವೆ ನಾ ಬೆಳಕಂತೆ<br>
  ಬರುವೆಯಾ ನೀ ಬೆಳದಿಂಗಳಂತೆ<br>
  ನಿಂತಿರುವೆ ನಾ ಮರದಂತೆ<br>
  ಬರುವೆಯಾ ನೀ ನೆರಳಂತೆ<br>
  <br>
  ಕಾಯುವೆ ನಾ ಕಡಲಂತೆ <br>
  ಸೇರು ನೀ ನದಿಯಂತೆ<br>
  ಬರುವೆಯಾ ನೀ ಮಳೆಯಂತೆ<br>
  ಕುಣಿವೆ ನಾ ನವಿಲಂತೆ<br>
  <br>
  Be my Valentine, let love begin,<br>
  With you, forever, Puttu will win. 💘</p>
</div>`;
const flirtyMsg = `<h2 class="flirty">I knew it! Achu ma, you are the luckiest person in the world.<br>♾️ Love, Puttu 💖</h2>${poetry}<div class='hearts'></div>`;

// Yes button click
yesBtn.addEventListener('click', () => {
  questionContainer.style.display = 'none';
  resultContainer.innerHTML = flirtyMsg;
  // Add animated hearts
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement('div');
    heart.className = 'animated-heart';
    heart.style.left = Math.random() * 90 + '%';
    heart.style.animationDelay = (Math.random() * 2) + 's';
    document.querySelector('.hearts').appendChild(heart);
  }
  resultContainer.style.display = 'flex';
  resultContainer.style.flexDirection = 'column';
  resultContainer.style.alignItems = 'center';
  resultContainer.style.justifyContent = 'center';
  resultContainer.style.animation = 'fadeIn 1s';
});

// No button runs away, stays in frame
function randomPosition(btn) {
  const padding = 20;
  const btnWidth = btn.offsetWidth;
  const btnHeight = btn.offsetHeight;
  const maxX = window.innerWidth - btnWidth - padding;
  const maxY = window.innerHeight - btnHeight - padding;
  let x, y, tries = 0;
  do {
    x = Math.random() * maxX;
    y = Math.random() * maxY;
    // Prevent overlap with Yes button
    const yesRect = yesBtn.getBoundingClientRect();
    const btnRect = {left: x, right: x + btnWidth, top: y, bottom: y + btnHeight};
    const overlap = !(btnRect.right < yesRect.left - 10 || btnRect.left > yesRect.right + 10 || btnRect.bottom < yesRect.top - 10 || btnRect.top > yesRect.bottom + 10);
    if (!overlap) break;
    tries++;
  } while (tries < 10);
  btn.style.position = 'fixed';
  btn.style.left = `${x}px`;
  btn.style.top = `${y}px`;
  btn.style.transition = 'left 0.3s, top 0.3s';
}

const noPhrases = [
  "Please Achu",
  "kandamma nodi please",
  "Kalige biltini please",
  "onde ond sari nodi",
  "CFO Please",
  "Think again",
  "Are you sure?",
  "This is not right",
  "Alright",
  "Check again",
  "Make sure",
  "Really?",
  "Give it another thought",
  "Don't break Puttu's heart!",
  "One more chance!",
];
let noPhraseIndex = 0;

function updateNoBtnText() {
  noBtn.textContent = noPhrases[noPhraseIndex % noPhrases.length];
  noPhraseIndex++;
}

noBtn.addEventListener('mouseenter', () => {
  randomPosition(noBtn);
  updateNoBtnText();
});
noBtn.addEventListener('click', () => {
  randomPosition(noBtn);
  updateNoBtnText();
});

// Reset No button position on resize
window.addEventListener('resize', () => {
  noBtn.style.position = 'static';
  noBtn.style.left = '';
  noBtn.style.top = '';
});
