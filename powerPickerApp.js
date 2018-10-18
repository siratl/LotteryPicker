function powerPicker() {
  let luckyNums = [];
  for (i = 0; i < 5; i++) {
    if (luckyNums.length <= 5) {
      var pick = Math.floor(Math.random() * 69) + 1;
      luckyNums.push(pick);
    }
  }
  let power = [Math.floor(Math.random() * 26) + 1];
  luckyNums.push(power);
  return luckyNums;
}
powerPicker()