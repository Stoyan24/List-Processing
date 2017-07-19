module.exports = function (array, commands) {

    if (commands.length <= 0) {
        return 'Error: invalid command parameters';
    }

    array.unshift(commands);
    return true
};