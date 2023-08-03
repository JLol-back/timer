//Timer1.js Run in Node with Command Line Args


if (process.argv.length <= 2) {
  return;
};

for (let i = 2; i < process.argv.length; i++) {
 
//console.log(typeof process.argv[i]);
////let test = Number(process.argv[i]);
//console.log(typeof test);
//console.log(process.argv[i]);

if ((Number(process.argv[i]) === Number) && (Number(process.argv[i]) >= 0)); {
   let delay = (process.argv[i]) * 1000;
    setTimeout(() => { process.stdout.write('\x07')}, delay);
  };
};