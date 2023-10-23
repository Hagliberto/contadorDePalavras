window.addEventListener('DOMContentLoaded', function() {
    var textarea = document.getElementById('text-input');
    var wordCountSpan = document.getElementById('word-count');
    var charCountSpan = document.getElementById('char-count');
    
    textarea.addEventListener('input', function() {
      var text = textarea.value;
      var words = text.trim().split(/\s+/);
      var wordCount = words.length;
      var charCount = text.length;
      
      wordCountSpan.textContent = wordCount;
      charCountSpan.textContent = charCount;
    });
  });