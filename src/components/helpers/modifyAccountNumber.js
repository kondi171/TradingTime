const ModifyAccountNumber = (accountNumber) => {
  const numberLength = accountNumber.toString().length;
  let modifiedAccountNumber = '';

  let j = 0;
  for (let i = 0; i < numberLength; i++) {
    modifiedAccountNumber += accountNumber.toString()[i];
    if (i === 1) {
      modifiedAccountNumber += ' ';
      j = 0;
    }

    if (j === 4) {
      modifiedAccountNumber += ' ';
      j = 0;
    }

    j++;
  }
  return modifiedAccountNumber;
};

export default ModifyAccountNumber;
