const args = process.argv.slice(2);

for (let i = 0; i < args.length; i++) {
  if (args[i] > 0 && !Number.isNaN(args[i])) {
    setTimeout(() => {
      process.stdout.write('# \n');
    }, args[i] * 1000);
  }
}