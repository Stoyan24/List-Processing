module.exports = function (array,commands) {

    if (commands.length  <= 1 ||  commands.length > 2) {
        return 'Error: invalid command parameters';
    }

    let index  = Number(commands[0]);

    if(index < 0 || index > array.length || !Number.isInteger(index)){
        return `Error: invalid index ${commands[0]}`;
    }

    array.splice(index, 0, commands[1]);

    return true
};