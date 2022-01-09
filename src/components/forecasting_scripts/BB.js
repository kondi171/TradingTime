const BB = (standard, observationDays, actionCloseValues, arraySMA) => {
  const getStandardDeviation = () => {
    let mean = [];
    let sum = 0;
    let component = [];
    let standardDevArray = [];

    for (let i = 0; i < actionCloseValues.length - observationDays + 1; i++) {
      for (let j = 0; j < observationDays; j++) {
        component[j] = actionCloseValues[i + j];
        sum += actionCloseValues[i + j];
        // console.log(component[j]);
      }

      // console.log(sum);
      // console.log('----------------------------------');

      mean[i] = sum / observationDays;
      sum = 0;

      // console.log(mean[i]);
      // console.log('=========================');
      standardDevArray[i] = Math.sqrt(
        component
          .map((element) => {
            return Math.pow(element - mean[i], 2);
          })
          .reduce((a, b) => a + b) / observationDays
      );
    }

    // console.log(standardDevArray);
    return standardDevArray;
  };

  const getBollingerBands = () => {
    let upperBollingerBand = [];
    let lowerBollingerBand = [];
    let standardDeviationArray = getStandardDeviation();
    let bollingerBandsArray = [];

    // console.log()

    for (let i = 0; i < actionCloseValues.length - observationDays + 1; i++) {
      upperBollingerBand[i] =
        arraySMA[i] + standardDeviationArray[i] * standard;
      lowerBollingerBand[i] =
        arraySMA[i] - standardDeviationArray[i] * standard;
    }

    for (let i = 0; i < upperBollingerBand.length; i++)
      bollingerBandsArray.push({
        upperBollingerBand: upperBollingerBand[i],
        lowerBollingerBand: lowerBollingerBand[i],
      });

    // console.log(bollingerBandsArray);

    return bollingerBandsArray;
  };

  return getBollingerBands();
};

export default BB;
