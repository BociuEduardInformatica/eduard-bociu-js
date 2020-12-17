const validateInput = (datas) => {
  if (datas.length < 4) {
    return 'Width and height not defined!';
  } else {
    if (isNaN(datas[2]) === true || isNaN(datas[3])) {
      return 'The inputed format of width and height is not accepted!';
    } else {
      return datas[2] * datas[3];
    }
  }
};

if (process.argv !== null) {
  console.log(validateInput(process.argv));
}
