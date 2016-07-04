/**
@params(num) - decimal number
**/

var decimalToBinary = function(num) {
  var string = '0.';
  var i = 1;

  while (num > 0) {
    if (string.length > 32) return 'ERROR';
    if (num >= 1/Math.pow(2,i)) {
      string += '1';
      num -= (1/Math.pow(2,i));
    } else {
      string += '0';
    }
    i++;
  }
  
  return string;
};

//runtime: constant