module.exports = function (array,commands) {

  if(commands.length > 0){
    return 'Error: invalid command parameters';
  }

  array.sort((a,b)=> a.toLowerCase().localeCompare(b.toLowerCase()));
  return true
};