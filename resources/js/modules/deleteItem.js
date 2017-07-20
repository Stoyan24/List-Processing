module.exports = function (array, commands) {

    let tokens = commands.map(el => Number(el));

    if (tokens.length === 0 || tokens.length > 1) {
        return 'Error: invalid command parameters';
    }
    if (tokens[0] < 0 || tokens[0] > array.length - 1) {
        return `Error: invalid index ${tokens[0]}`;
    }
    if(isNaN(tokens)){
        return 'Error: invalid command parameter';
    }
    
    array.splice(tokens[0], 1);
    return true

};