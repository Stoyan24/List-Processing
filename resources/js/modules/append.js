module.exports = function (array, tokens) {

    if (tokens.length <= 0) {
        return 'Error: invalid command parameters';
    }

    array.push(tokens);
    return true
};