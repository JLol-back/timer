//Timer1.js Run in Node with Command Line Args

const inputs = process.argv.slice(2);

const cleanInputs = inputs.filter((item) => { 
  return !isNaN(Number(item)) && item >= 0;
});

for (let i = 0; i < cleanInputs.length; i++) {
 
  let delay = (cleanInputs[i]) * 1000;
    setTimeout(() => { process.stdout.write('\x07')}, delay);
};
