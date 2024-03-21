// It's short and easy to understand

function validISBN10(isbn) {
    var r =  isbn.split('').reduce(function(a, b, i){
      return a + (b == 'X' && i === 9 ? 10 : b) * (i + 1);
    }, 0);
    return r % 11 === 0 && isbn.length === 10;
  }