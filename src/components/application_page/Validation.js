function Validation(type, value, confirmValue) {
  let regex;
  let isCorrect;

  if (type === 'password') {
    // console.log(value);
    // console.log(confirmValue);
    const regex = /(?=.*\w)(?=.*\W)(?=.*[A-Z]).{8,}/;
    if (value === confirmValue) isCorrect = new RegExp(regex).test(value);
    else isCorrect = 'DifferentValues';
  }

  if (type === 'email') {
    regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    isCorrect = new RegExp(regex).test(value);
  }

  if (type === 'telephone') {
    regex = /(?=.*[0-9])^.{9,9}$/;
    isCorrect = new RegExp(regex).test(value);
  }

  // console.log(isCorrect);
  return isCorrect;
}

export default Validation;
