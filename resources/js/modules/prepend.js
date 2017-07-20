module.exports = function (array, commands) {

    if (commands.length === 0 || commands.length > 1) {
        return 'Error: invalid command parameters';
    }

    array.unshift(commands[0]);
    return true
};