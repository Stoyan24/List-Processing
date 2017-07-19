module.exports = function (array,tokens) {
  // not expecting any tokens soo .. return "Error: invalid command parameters"
  if (tokens.length > 0) {
    return 'Error: invalid command parameters';
  }
  // if tokens are 0 (in this case) .. we reverse the array and return true..
  array.reverse();
  return true
};