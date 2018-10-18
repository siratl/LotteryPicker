function megaPicker() {
  let luckyNums = [];
  for (i = 0; i < 5; i++) {
    if (luckyNums.length <= 5) {
      var pick = Math.floor(Math.random() * 70) + 1;
      luckyNums.push(pick);
    }
  }
  let mega = [Math.floor(Math.random() * 25) + 1];
  luckyNums.push(mega);
  return luckyNums;
}
megaPicker()
