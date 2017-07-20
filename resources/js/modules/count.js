module.exports = function (array,commands) {
    if(commands.length !== 1){
      return 'Error: invalid command parameters';
    }

    let stringsCount = 0;
    for (let string of array) {
        if (commands[0] === string){
            stringsCount++;
        }
    }

    return stringsCount;
};