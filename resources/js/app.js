let command = require('resources/js/modules/commandManager.js');
$().ready(initializeListProcessor);

function initializeListProcessor() {
  let stringList = [];
  let initialStringsInserted = false;

  // catch elements
  let commandLine = $('#commandLine');
  //clearing the display port
  $('#resultDisplay').attr('placeholder', '');

  //attach event listeners
  $('#submit').click(handleUserSubmit);
  commandLine.keypress(e => e.which === 13 ? handleUserSubmit(): '');
  commandLine.attr('placeholder', 'Please enter a list of strings, separated by space.');

  function handleUserSubmit() {
    let commandLineTokens = commandLine.val().split(' ').filter(e => e !== '');
    commandLine.val('');

    if (!initialStringsInserted) {
      stringList = commandLineTokens.slice(0);
      initialStringsInserted = true;
      display(stringList.join(', '));
      commandLine.attr('placeholder', 'Please enter a command.');
      return
    }

    switch (commandLineTokens.shift()){
      case 'append' :
        execCommand(command.append,stringList,commandLineTokens);
        break;
      case 'prepend' :
        execCommand(command.prepend,stringList,commandLineTokens);
        break;
      case 'reverse' :
        execCommand(command.reverse,stringList,commandLineTokens);
        break;
      case 'insert' :
        execCommand(command.insert,stringList,commandLineTokens);
        break;
      case 'delete' :
        execCommand(command.deleteItem,stringList,commandLineTokens);
        break;
      case 'roll' :
        execCommand(command.roll,stringList,commandLineTokens);
        break;
      case 'sort' :
        execCommand(command.sort,stringList,commandLineTokens);
        break;
      case 'count' :
        execCommand(command.count,stringList,commandLineTokens);
        break;
      case 'end' :
        display(stringList.join(', '));
        break;
      default:
        display('Error: invalid command.');
        break;
    }
  }

  function execCommand(func, array, commandLineTokens) {
    let result = func(array,commandLineTokens);
    if (result === true) {
      display(array.join(', '))
    }
    else {
      display(result);
    }
  }
}

function display(data) {
  let displayBox = $('#resultDisplay');
  let result = '';
  if (displayBox.val() === '') {
    result = data;
  }
  else {
    result = displayBox.val() +'\n' + data;
  }

  displayBox.val(result);
}

