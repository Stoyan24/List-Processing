module.exports = function (array, tokens) {

    if (tokens.length  === 0 || tokens.length > 1) {
        return 'Error: invalid command parameters';
    }

    array.push(tokens[0]);
    return true
};