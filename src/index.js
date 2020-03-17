module.exports = function reverse (n) {
  if(!/\d/.test(n)){return false;}
  return Number(n.toString().split('').reverse().join(''));
}
