const args1 = process.argv;
let args = args1.slice(2);

const timer = function(time) {
  for (number of time){
    if (!isNaN(number) && number > 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, (number * 1000));
    }
  }

}

timer(args);