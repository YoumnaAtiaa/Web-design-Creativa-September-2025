function looping(startnum, endnum, breaknum, contnum) {
  if (
    startnum === undefined ||
    endnum === undefined ||
    breaknum === undefined ||
    contnum === undefined
  ) {
    console.log("undefined");
    return;
  }

  if (
    typeof startnum !== "number" ||
    typeof endnum !== "number" ||
    typeof breaknum !== "number" ||
    typeof contnum !== "number"
  ) {
    console.log("undefined");
    return;
  }

  for (let i = startnum; i <= endnum; i++) {
    if (i === breaknum) {
      console.log("Break at:", i);
      break;
    }
    if (i === contnum) {
      console.log("Continue at:", i);
      continue;
    }
    console.log(i);
  }
}

looping(1, 10, 7, 4);
looping(1, 10, 7);