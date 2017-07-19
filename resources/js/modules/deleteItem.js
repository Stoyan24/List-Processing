module.exports = function (array, commands) {

    if (commands[0] < 0 || commands[0] > array.length - 1) {
        return `Error: invalid index ${commands[0]}`;
    }
    if (commands.length === 0 || commands.length > 1) {
        return 'Error: invalid command parameters';
    }

    array.splice(commands[0], 1);
    return true

};
