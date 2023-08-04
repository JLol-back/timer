//Timer1.js Run in Node with Command Line Args


if (process.argv.length <= 2) {
  return;
};

for (let i = 2; i < process.argv.length; i++) {
 
//console.log(typeof process.argv[i]);
console.log(Number(process.argv[i]));
//console.log(typeof test);
//console.log(process.argv[i]);

  if (Number(process.argv[i]) === NaN) {
    continue;
  }

  if (Number(process.argv[i]) < 0) {
    continue;
  }

  let delay = (process.argv[i]) * 1000;
    setTimeout(() => { process.stdout.write('\x07')}, delay);
};
