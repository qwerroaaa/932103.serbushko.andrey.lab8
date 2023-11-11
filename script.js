function addInput() {
    var container = document.getElementById('container');
    var div = document.createElement('div');
    div.innerHTML = '<input type="text" name="name[]" placeholder="Название" required> <input type="number" name="number[]" placeholder="Число" required> <button onclick="moveUp(this)">↑</button> <button onclick="moveDown(this)">↓</button> <button onclick="removeInput(this)">✖</button>';
    container.appendChild(div);
  }

  function saveData() {
    var elements = document.querySelectorAll('[name^="name"]');
    var output = {};

    elements.forEach(function(element, index) {
      var name = element.value;
      var number = document.getElementsByName('number[]')[index].value;
      output[name] = number;
    });

    var outputContainer = document.getElementById('output');
    outputContainer.textContent = JSON.stringify(output, null, 2);
  }

  function moveUp(button) {
    var currentDiv = button.parentNode;
    var previousDiv = currentDiv.previousElementSibling;

    if (previousDiv) {
      currentDiv.parentNode.insertBefore(currentDiv, previousDiv);
    }
  }

  function moveDown(button) {
    var currentDiv = button.parentNode;
    var nextDiv = currentDiv.nextElementSibling;

    if (nextDiv) {
      currentDiv.parentNode.insertBefore(nextDiv, currentDiv);
    }
  }

  function removeInput(button) {
    var currentDiv = button.parentNode;
    currentDiv.parentNode.removeChild(currentDiv);
  }