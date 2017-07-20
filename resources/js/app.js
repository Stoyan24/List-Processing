let commandManager = require('resources/js/modules/commandManager.js');
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
        execCommand(commandManager.append,stringList,commandLineTokens);
        break;
      case 'prepend' :
        execCommand(commandManager.prepend,stringList,commandLineTokens);
        break;
      case 'reverse' :
        execCommand(commandManager.reverse,stringList,commandLineTokens);
        break;
      case 'insert' :
        execCommand(commandManager.insert,stringList,commandLineTokens);
        break;
      case 'delete' :
        execCommand(commandManager.deleteItem,stringList,commandLineTokens);
        break;
      case 'roll' :
        execCommand(commandManager.roll,stringList,commandLineTokens);
        break;
      case 'sort' :
        execCommand(commandManager.sort,stringList,commandLineTokens);
        break;
      case 'count' :
        execCommand(commandManager.count,stringList,commandLineTokens);
        break;
      case 'end' :
        if (commandLineTokens.length > 0) {
          display('Error: invalid command parameters');
          return;
        }
        display('Finished');
        commandLine.attr('placeholder', 'Command Line Disabled.. Please restart!');
        commandLine.attr('disabled','disabled');
        commandLine = '';// drop the input so it will not get any new commands
        break;
      default:
        display('Error: invalid command.');
        break;
    }
  }

  function execCommand(func, array, commandLineTokens) {
    let result = func(array,commandLineTokens);
    if (result === true) {
      display(array.join(', '));
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

