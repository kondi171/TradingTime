import React from 'react';
import { Line, defaults } from 'react-chartjs-2';
import EMA from '../../forecasting scripts/EMA';
import BB from '../../forecasting scripts/BB';
import { useEffect, useState } from 'react';

const ActionChart = ({ actionName, actionValues, chartRange }) => {
  //Settings for chart tooltip title
  defaults.plugins.tooltip.callbacks.title = function () {
    let prefix;
    if (chartRange === 'today') prefix = 'Godzina: ';
    else prefix = 'Dzień: ';

    return prefix + this.dataPoints[0].label;
  };

  //Settings for chart tooltip label
  defaults.plugins.tooltip.callbacks.label = function (context) {
    let label = context.dataset.label || '';
    if (label) {
      label += ': ';
    }
    if (context.parsed.y !== null) {
      label += new Intl.NumberFormat('pl-PL', {
        style: 'currency',
        currency: 'PLN',
      }).format(context.parsed.y);
    }
    return label;
  };

  const [todayValues, setTodayValues] = useState([]);
  const [lastWeekValues, setLastWeekValues] = useState([]);
  const [lastMonthValues, setLastMonthValues] = useState([]);
  const [lastQuarterValues, setLastQuarterValues] = useState([]);

  const getBollingerBands = () => {
    const actionCloseValues = actionValues.pastValues.map((action) =>
      parseFloat(action.value)
    );

    let bolinger = [];
    bolinger = BB(2, 10, actionCloseValues, EMA(10, actionCloseValues));
    // console.log(bolinger);
    return bolinger;
    // return BB(2, 10, actionCloseValues, EMA(10, actionCloseValues));
  };

  const addForecastTags = (array, bollingerBands) => {
    const bollingerBandsReversed = bollingerBands;
    array.forEach((element, index) => {
      // console.log(element);
      // console.log(bollingerBandsReversed[index + 1]);
      if (element.value >= bollingerBandsReversed[index + 1].upperBollingerBand)
        console.log('sell ' + element.day);
      else if (
        element.value <= bollingerBandsReversed[index + 1].lowerBollingerBand
      )
        console.log(
          'buy ' +
            element.day +
            ' ' +
            element.value +
            ' ' +
            bollingerBandsReversed[index + 1].lowerBollingerBand
        );
      // console.log(bollingerBands[index].upperBollingerBand);
      // console.log(element);
      // elementIndex++;
    });
    // console.log(bollingerBands.reverse()[1].upperBollingerBand);
    // if (array >= bollingerBands.upperBollingerBand) return 'sell';
    // else if (array <= bollingerBands.lowerBollingerBand) return 'buy';
    // else return null;
  };

  const fillDataArrays = () => {
    const pastValues = actionValues.pastValues.reverse();

    const getTodayValues = () => {
      let todayValuesArray = [];

      actionValues.today.forEach((element) => {
        element.action = 'buy';
        todayValuesArray.push(element);
      });

      return todayValuesArray;
    };

    const getLastWeekValues = () => {
      let lastWeekValuesArray = [];
      pastValues.map((element, index = 0) => {
        if (index < 7) {
          return lastWeekValuesArray.push(element);
        }
      });
      lastWeekValuesArray = lastWeekValuesArray.reverse();
      return lastWeekValuesArray;
    };

    const getLastMonthValues = () => {
      let lastMonthValuesArray = [];
      pastValues.map((element, index = 0) => {
        if (index < 30) return lastMonthValuesArray.push(element);
      });
      lastMonthValuesArray = lastMonthValuesArray.reverse();

      return lastMonthValuesArray;
    };

    setTodayValues(getTodayValues);
    setLastWeekValues(getLastWeekValues);
    setLastMonthValues(getLastMonthValues);

    addForecastTags(getLastMonthValues(), getBollingerBands());
    // console.log(lastWeekValuesArray);
    // console.log(lastMonthValuesArray);
  };

  const xLabel = () => {
    let label;
    if (chartRange === 'today')
      label = todayValues.map((action) =>
        action.hour < 10 ? '0' + action.hour + ':00' : action.hour + ':00'
      );
    else if (chartRange === 'week')
      label = lastWeekValues.map((action) => action.day);
    else if (chartRange === 'month')
      label = lastMonthValues.map((action) => action.day);
    // else if (chartRange === 'quarter')
    //   label = actionValues.pastValues.map((action) => action.day);
    return label;
  };

  // const chartWithForecastingTags = () => {
  //   for (int i)
  // }

  const chartValues = () => {
    let values;
    if (chartRange === 'today')
      values = todayValues.map((action) => action.value);
    else if (chartRange === 'week')
      values = lastWeekValues.map((action) => action.value);
    else if (chartRange === 'month') {
      console.log(lastMonthValues);
      values = lastMonthValues.map((action) => {
        return action.value;
      });
    } else if (chartRange === 'quartesr') values = 0;
    return values;
  };

  useEffect(() => fillDataArrays(), []);

  return (
    <div className='action-chart-wrapper'>
      <Line
        data={{
          labels: xLabel(),
          datasets: [
            {
              label: 'Cena akcji ' + actionName,
              data: chartValues(),
              backgroundColor: 'cadetBlue',
            },
          ],
        }}
        options={{
          plugins: {
            legend: {
              display: false,
            },
            title: {
              display: true,
              text: 'Wykres akcji ' + actionName,
              padding: {
                bottom: 40,
              },
              font: {
                size: 30,
              },
            },
          },

          layout: {
            padding: {
              left: 50,
              right: 70,
            },
          },
        }}
      />
    </div>
  );
};

export default ActionChart;
