module.exports = function (array, tokens) {

    if (tokens.length === 0 || tokens.length > 1) {
        return 'Error: invalid command parameters';
    }

    if (parseInt(tokens[0],10) != tokens[0]) {
        return `Error: invalid index ${tokens[0]}`;
    }

    if (tokens[0] < 0 || tokens[0] > array.length - 1) {
        return `Error: invalid index ${tokens[0]}`;
    }

    array.splice(tokens[0], 1);
    return true;
};
