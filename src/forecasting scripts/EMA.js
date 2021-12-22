const EMA = (observationDays, actionsCloseValues) => {
  const multiplier = 2 / (observationDays + 1);

  const getSMA = () => {
    const actionsValues = actionsCloseValues.reverse();
    let firstSMA = 0;

    for (let i = 0; i < observationDays; i++) {
      firstSMA += actionsValues[i];
    }

    if (firstSMA === 0) return 0;

    firstSMA = firstSMA / observationDays;
    return firstSMA;
  };

  const getEMA = () => {
    let EMAValues = [];

    EMAValues[0] = getSMA();

    for (let i = 1; i < actionsCloseValues.length - observationDays + 1; i++) {
      EMAValues[i] =
        actionsCloseValues[i + observationDays - 1] * multiplier +
        EMAValues[i - 1] * (1 - multiplier);
    }

    // console.log(EMAValues);

    return EMAValues;
  };

  return getEMA();
};

export default EMA;
