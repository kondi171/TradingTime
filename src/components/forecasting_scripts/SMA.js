const SMA = (observationDays, actionsCloseValues) => {
  const getSMA = () => {
    const actionsValues = actionsCloseValues.reverse();
    let SMA = [];
    let average = 0;

    for (let i = 0; i < actionsCloseValues.length - observationDays + 1; i++) {
      for (let j = 0; j < observationDays; j++) {
        average += actionsValues[j + i];
      }

      SMA.push(average / observationDays);

      average = 0;
    }
    if (SMA.length === 0) return 0;
    return SMA;
  };

  return getSMA();
};

export default SMA;
