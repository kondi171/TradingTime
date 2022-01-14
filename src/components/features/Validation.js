const Validation = (type, value, confirmValue) => {
  let regex;
  let isCorrect;

  if (type === 'password') {
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

  if (type === 'postalCode') {
    regex = /([0-9]){2,2}-([0-9]){3,3}$/;
    isCorrect = new RegExp(regex).test(value);
  }

  if (type === 'pesel') {
    regex = /(?=.*[0-9])^.{11,11}$/;
    isCorrect = new RegExp(regex).test(value);
  }

  if (type === 'birthDate') {
    const today = new Date();
    const birthDate = new Date(value);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    const day = today.getDate() - birthDate.getDate();

    if ((month <= 0 && day <= 0) || today.getDate() < birthDate.getDate()) {
      age--;
    }

    if (age >= 18) isCorrect = true;
    else isCorrect = false;

    console.log(isCorrect);
  }

  if (type === 'name') {
    regex =
      /^[AaĄąBbCcĆćDdEeĘęFfGgHhIiJjKkLlŁłMmNnŃńOoÓóPpRrSsŚśTtUuWwYyZzŹźŻż]+$/;
    isCorrect = new RegExp(regex).test(value);
  }
  if (type === 'personalId') {
    regex = /([A-Z]){3,3}([0-9]){6,6}$/;
    isCorrect = new RegExp(regex).test(value);
  }

  if (type === 'accountNumber') {
    regex = /([0-9]){26,26}$/;
    isCorrect = new RegExp(regex).test(value);
  }

  if (type === 'houseNumber') {
    regex = /(?=.*[0-9])^.{1,4}([A-Za-z]?)$/;
    isCorrect = new RegExp(regex).test(value);
  }

  if (type === 'apartmentNumber') {
    regex = /(?=.*[0-9])^.{1,4}([A-Za-z]?)$/;
    const firstCondition = new RegExp(regex).test(value);
    let secondContition;
    if (value === '-') secondContition = true;

    if (firstCondition || secondContition) isCorrect = true;
    else isCorrect = false;
  }

  return isCorrect;
};

export default Validation;
