const BB = (standard, observationDays, actionCloseValues, arrayEMA) => {
  const getStandardDeviation = () => {
    let mean = [];
    let sum = 0;
    let component = [];
    let standardDevArray = [];

    for (let i = 0; i < actionCloseValues.length - observationDays; i++) {
      for (let j = 0; j < observationDays; j++) {
        component[j] = actionCloseValues[i + j];
        sum += actionCloseValues[i + j];
      }

      mean[i] = sum / observationDays;
      sum = 0;

      standardDevArray[i] = Math.sqrt(
        component
          .map((element) => {
            return Math.pow(element - mean[i], 2);
          })
          .reduce((a, b) => a + b) / observationDays
      );
    }
    return standardDevArray;
  };

  const getBollingerBands = () => {
    let upperBollingerBand = [];
    let lowerBollingerBand = [];
    let standardDeviationArray = getStandardDeviation();
    let bollingerBandsArray = [];

    for (let i = 0; i < actionCloseValues.length - observationDays; i++) {
      upperBollingerBand[i] =
        arrayEMA[i] + standardDeviationArray[i] * standard;
      lowerBollingerBand[i] =
        arrayEMA[i] - standardDeviationArray[i] * standard;
    }

    for (let i = 0; i < upperBollingerBand.length; i++)
      bollingerBandsArray.push({
        upperBollingerBand: upperBollingerBand[i],
        lowerBollingerBand: lowerBollingerBand[i],
      });

    return bollingerBandsArray;
  };

  return getBollingerBands();
};

export default BB;
