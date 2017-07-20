module.exports = function (array,commands) {

    if (commands.length  === 0 ||  commands.length > 1) {
        return 'Error: invalid command parameters';
    }

    let command = '' + commands;

    if(command ==='right'){

        let lastString = array.pop();
        array.unshift(lastString);
    }

    if(command === 'left'){
        let firstString = array.shift();
        array.push(firstString);
    }

    return true

};