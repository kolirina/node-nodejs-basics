const parseArgs = () => {
  let res = [];
  const args = process.argv.slice(2);
  for (let i = 0; i < args.length; i += 2) {
    const propName = args[i].replace("--", "");
    const propValue = args[i + 1];
    res.push(`${propName} is ${propValue}`);
  }
  console.log(res.join(", "));
};

parseArgs();
