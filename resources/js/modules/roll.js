module.exports = function (array,commands) {

    if (commands.length  === 0 ||  commands.length > 1) {
        return 'Error: invalid command parameters';
    }

    if(commands[0] ==='right'){

        let lastString = array.pop();
        array.unshift(lastString);
    }

    if(commands[0] === 'left'){
        let firstString = array.shift();
        array.push(firstString);
    }

    return true

};