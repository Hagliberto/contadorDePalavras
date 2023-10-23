window.addEventListener('DOMContentLoaded', function() {
  var textarea = document.getElementById('text-input');
  var wordCountSpan = document.getElementById('word-count');
  var charCountSpan = document.getElementById('char-count');
  var countWordsBtn = document.getElementById('count-words-btn');
  var countCharsBtn = document.getElementById('count-chars-btn');
  var clearBtn = document.getElementById('clear-btn');

  function countWords() {
    var text = textarea.value;
    var words = text.trim().split(/\s+/);
    var wordCount = words.length;

    wordCountSpan.textContent = wordCount;
  }

  function countChars() {
    var text = textarea.value;
    var charCount = text.length;

    charCountSpan.textContent = charCount;
  }

  countWordsBtn.addEventListener('click', function() {
    countWords();
  });

  countCharsBtn.addEventListener('click', function() {
    var text = textarea.value;
    var charCountWithSpaces = text.length;
    var charCountWithoutSpaces = text.replace(/\s+/g, '').length;

    charCountSpan.textContent = charCountWithSpaces + " (incluindo espaços em branco: " + charCountWithoutSpaces + ")";
  });

  clearBtn.addEventListener('click', function() {
    textarea.value = '';
    wordCountSpan.textContent = '0';
    charCountSpan.textContent = '0';
  });
});