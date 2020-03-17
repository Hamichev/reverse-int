module.exports = function reverse (n) {
  if(!/\d/.test(n)){return false;}
  return +n.toString().split('').reverse().join('');
}
