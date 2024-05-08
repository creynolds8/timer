const args = process.argv.slice(2);

for (let i = 0; i < args.length; i++) {
  setTimeout(() => {
    process.stdout.write('# \n');
  }, args[i] * 1000);
}