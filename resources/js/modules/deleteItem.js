module.exports = function (array, commands) {

    if(commands < 0 || commands > array.length - 1){
        return `Error: invalid index ${commands}`;
    }else if(typeof commands !== 'number'){
       return `Error: Token should be number`;
    }

    array.splice(commands, 1);
    return true
};