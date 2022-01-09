const EMA = (observationDays, actionsCloseValues, SMA) => {
  const multiplier = 2 / (observationDays + 1);

  const getEMA = () => {
    let EMAValues = [];
    let SMAValue = SMA;
    EMAValues[0] = SMAValue[0];

    for (let i = 1; i < actionsCloseValues.length - observationDays + 1; i++) {
      EMAValues[i] =
        actionsCloseValues[i + observationDays - 1] * multiplier +
        EMAValues[i - 1] * (1 - multiplier);
    }

    return EMAValues;
  };

  return getEMA();
};

export default EMA;
