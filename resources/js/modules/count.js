module.exports = function (array,commands) {
    if(commands.length !== 1){
      return 'Error: invalid command parameters';
    }

    let count = 0;
    for (let string of array) {
        if (commands[0] === string){
          count++;
        }
    }

    return count;
};