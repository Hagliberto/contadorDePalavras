document.addEventListener('DOMContentLoaded', function() {
    var textInput = document.getElementById('text-input');
    var wordCount = document.getElementById('word-count');
    var charCount = document.getElementById('char-count');
    var whitespaceCount = document.getElementById('whitespace-count');
    var countWordsBtn = document.getElementById('count-words-btn');
    var countCharsBtn = document.getElementById('count-chars-btn');
    var clearBtn = document.getElementById('clear-btn');
  
    countWordsBtn.addEventListener('click', function() {
      var text = textInput.value.trim();
      var words = text.split(/\s+/).filter(function(word) {
        return word.length > 0;
      });
      wordCount.textContent = words.length;
    });
  
    countCharsBtn.addEventListener('click', function() {
      var text = textInput.value;
      var nonSpaceChars = text.replace(/\s/g, '');
      var whitespaceChars = text.length - nonSpaceChars.length;
      charCount.textContent = nonSpaceChars.length;
      whitespaceCount.textContent = whitespaceChars;
    });
  
    clearBtn.addEventListener('click', function() {
      textInput.value = '';
      wordCount.textContent = '0';
      charCount.textContent = '0';
      whitespaceCount.textContent = '0';
    });
  });