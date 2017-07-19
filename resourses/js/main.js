$().ready(initializeListProcessor);

function initializeListProcessor() {
  let stringList = [];
  let initialStringsInserted = false;

  // catch elements
  let displayBox = $('#resultDisplay');
  let commandLine = $('#commandLine');

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
      displayBox.val(`Initial List: ${stringList.join(', ')}`);
      commandLine.attr('placeholder', 'Please enter a command.');
      return
    }

    switch (commandLineTokens[0]){
      case 'append' :
        break;
      case 'prepend' :
        break;
      case 'reverse' :
        break;
      case 'insert' :
        break;
      case 'delete' :
        break;
      case 'roll' :
        break;
      case 'sort' :
        break;
      case 'count' :
        break;
      case 'end' :
        displayBox.val(stringList.join(', '));
        break;
      default:
        displayBox.val('Error: invalid command.');
        break;
    }
  }
}

