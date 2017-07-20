module.exports = function (array,commands) {

    if (commands.length  <= 1 ||  commands.length > 2) {
        return 'Error: invalid command parameters';
    }

    let index  = Number(commands[0]);

    let str = commands[1];


    if(index < 0 || !Number.isInteger(index)){
        return `Error: invalid index ${index}`;
    }

    array.splice(index, 0, str);

    return true
};