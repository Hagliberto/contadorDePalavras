document.addEventListener('DOMContentLoaded', function() {
    var textInput = document.getElementById('text-input');
    var wordCount = document.getElementById('word-count');
    var charCount = document.getElementById('char-count');
    var whitespaceCount = document.getElementById('whitespace-count');
    var countWordsBtn = document.getElementById('count-words-btn');
    var countCharsBtn = document.getElementById('count-chars-btn');
    var clearBtn = document.getElementById('clear-btn');
    var chartCtx = document.getElementById('chart').getContext('2d');
  
    var chartData = {
        labels: ['Palavras', 'Caracteres', 'Caracteres em Branco'],
        datasets: [{
          label: 'Contagem',
          data: [0, 0, 0],
          backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
          borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
          borderWidth: 1
        }]
      };
  
    var chartConfig = {
      type: 'bar',
      data: chartData,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };

  
    var chart = new Chart(chartCtx, chartConfig);
  
    countWordsBtn.addEventListener('click', function() {
      var text = textInput.value.trim();
      var words = text.split(/\s+/).filter(function(word) {
        return word.length > 0;
      });
      var wordCountValue = words.length;
      wordCount.textContent = wordCountValue;
      chartData.datasets[0].data[0] = wordCountValue;
      chart.update();
    });
  
    countCharsBtn.addEventListener('click', function() {
      var text = textInput.value;
      var nonSpaceChars = text.replace(/\s/g, '');
      var whitespaceChars = text.length - nonSpaceChars.length;
      var charCountValue = nonSpaceChars.length;
      charCount.textContent = charCountValue;
      whitespaceCount.textContent = whitespaceChars;
      chartData.datasets[0].data[1] = charCountValue;
      chartData.datasets[0].data[2] = whitespaceChars;
      chart.update();
    });
  
    clearBtn.addEventListener('click', function() {
      textInput.value = '';
      wordCount.textContent = '0';
      charCount.textContent = '0';
      whitespaceCount.textContent = '0';
      chartData.datasets[0].data = [0, 0, 0];
      chart.update();
    });
  });