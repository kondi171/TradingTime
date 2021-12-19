const EMA = (observationDays, actionsCloseValues) => {
  const multiplier = 2 / (observationDays + 1);

  const getSMA = () => {
    let firstSMA = 0;

    for (let i = 0; i < observationDays; i++) {
      firstSMA += actionsCloseValues[i];
    }

    if (firstSMA === 0) return 0;

    firstSMA = firstSMA / observationDays;
    return firstSMA;
  };

  const getEMA = () => {
    let EMAValues = [];

    EMAValues[0] = getSMA();

    for (let i = 1; i < actionsCloseValues.length - observationDays; i++) {
      EMAValues[i] =
        actionsCloseValues[i + observationDays - 1] * multiplier +
        EMAValues[i - 1] * (1 - multiplier);

      // console.log(EMAValues[i - 1]);

      // alert(
      //   `Wartość zamknięcia dnia poprzedniego: ${
      //     actionsCloseValues[i + observationDays - 2]
      //   },
      //   Współczynnik: ${multiplier},
      //   Poprzednie EMA: ${EMAValues[i - 1]},
      //   Multiplier - 1:   ${1 - multiplier}
      //   `
      // );
    }

    // console.log(EMAValues);

    return EMAValues;
  };

  return getEMA();
};

export default EMA;
