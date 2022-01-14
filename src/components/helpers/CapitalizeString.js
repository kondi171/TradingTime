const CapitalizeString = (value) => {
  let output = value.toLowerCase();

  if (output.includes(' '))
    output = output
      .split(' ')
      .map((element) => element.charAt(0).toUpperCase() + element.slice(1))
      .join(' ');
  else output = output.charAt(0).toUpperCase() + output.slice(1);

  console.log(output);
  return output;
};

export default CapitalizeString;
