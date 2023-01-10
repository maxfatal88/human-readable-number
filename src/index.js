
 module.exports = function toReadable (number) {
  
    let result = '';

    let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
                'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
                'seventeen', 'eighteen', 'nineteen'];
    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy','eighty',
                'ninety'];
  
    let numString = number.toString();
 
    if (number === 0) return 'zero';
  
    if (number < 20) {
      return ones[number];
    }
  
    if (numString.length === 2) {
      result=tens[numString[0]] + ' ' + ones[numString[1]];
    }
  
    if (numString.length == 3) {
      if (numString[1] === '0' && numString[2] === '0')
        result= ones[numString[0]] + ' hundred';
      else
         result= ones[numString[0]] + ' hundred ' + toReadable(+(numString[1] + numString[2]));
    }
    
    return result[result.length-1]==' '?result.slice(0,-1):result;

  }
