algo();

function algo() {
  for (var i = 0; i <= array.length - 1; i++) {
    if (array[i] < array[i + 1]) {
      swapAlgo(i);
    } 
      console.log(array[i]);
  
  }
}

function swapAlgo(i) {
  var x = array[i];
  array[i] = array[i + 1];
  array[i + 1] = x;
  algo();
}