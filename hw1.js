const colors = require('colors/safe');

const from = process.argv[2];
const to = process.argv[3];

let primeCount = 0;
let count = 1;

if ((from>to)||(from===to)) {
  console.log('введите диапазон -- сначала меньшее, потом большее число');
  process.exit(1);
}

if (!(isFinite(to)&&isFinite(from))) {
  console.log('граничные параметры должны быть числами');
  process.exit(1);
}


function isPrime(number) {
  if (number<=2) {
    return false;
  }
  for (let i=2; i<number/2; i++) {
    if (number%i === 0) {
      return false;
    }
    return true;
  }
} 


for (let number = from; number <= to; number++) {
  let fontColor = colors.green;

    if (isPrime(number)) {
      primeCount += 1;
        if (count%2===0) {
          fontColor = colors.yellow;
          count++;
    } if (count%3===0) {
      fontColor = colors.red;
      count++;
    } else {
        count++;
    }
    console.log(fontColor(number));
    }
}

if (primeCount === 0) {
  console.log('в указанном интервале нет простых чисел');
}

