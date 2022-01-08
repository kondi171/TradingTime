import React, { useState, useEffect } from 'react';
import { Line, defaults } from 'react-chartjs-2';
import EMA from '../../../forecasting_scripts/EMA';
import BB from '../../../forecasting_scripts/BB';

// const ActionChart = ({ actionName, actionValues, chartRange, todayValues, pastValues }) => {
const ActionChart = ({
  actionName,
  chartRange,
  todayActionValues,
  pastActionValues,
}) => {
  // Settings for chart tooltip title
  defaults.plugins.tooltip.callbacks.title = function () {
    let prefix;
    if (chartRange === 'today') prefix = 'Godzina: ';
    else prefix = 'Dzień: ';

    return prefix + this.dataPoints[0].label;
  };

  // Settings for chart tooltip label
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

  // defaults.config.data.datasets[0]['pointBackgroundColor'][0] = 'red';

  const [todayValues, setTodayValues] = useState([]);
  const [lastWeekValues, setLastWeekValues] = useState([]);
  const [lastMonthValues, setLastMonthValues] = useState([]);
  const [lastQuarterValues, setLastQuarterValues] = useState([]);

  const getBollingerBands = () => {
    const actionCloseValues = pastActionValues.map((action) =>
      parseFloat(action.closeValue)
    );

    let bolinger = [];

    // console.log(actionCloseValues);

    bolinger = BB(2.5, 30, actionCloseValues, EMA(30, actionCloseValues));
    // console.log(bolinger);
    return bolinger;
    // return BB(2, 10, actionCloseValues, EMA(10, actionCloseValues));
  };

  const addForecastTags = (array, bollingerBands) => {
    let newActionsArray = [...array];
    const BBLength = [...bollingerBands].length - 1;

    newActionsArray.reverse().forEach((element, index) => {
      // console.log(
      //   element.closeActionDate +
      //     '  cena: ' +
      //     element.closeValue +
      //     ', UpperBB: ' +
      //     bollingerBandsReversed[BBLength - index - 1].upperBollingerBand +
      //     // bollingerBandsReversed[index + 1].upperBollingerBand +
      //     ', LowerBB: ' +
      //     bollingerBandsReversed[BBLength - index - 1].lowerBollingerBand
      //   // bollingerBandsReversed[index + 1].lowerBollingerBand
      // );
      if (
        element.closeValue >=
        bollingerBands[BBLength - index].upperBollingerBand
      ) {
        console.log(
          'sell, data: ' +
            element.closeActionDate +
            ', cena: ' +
            element.closeValue +
            ', upperBB: ' +
            bollingerBands[BBLength - index].upperBollingerBand +
            ', lowerBB: ' +
            bollingerBands[BBLength - index].lowerBollingerBand
        );
        element.action = 'sell';
      } else if (
        element.closeValue <=
        bollingerBands[BBLength - index].lowerBollingerBand
      ) {
        console.log(
          'buy, data: ' +
            element.closeActionDate +
            ', cena: ' +
            element.closeValue +
            ', upperBB: ' +
            bollingerBands[BBLength - index].upperBollingerBand +
            ', lowerBB: ' +
            bollingerBands[BBLength - index].lowerBollingerBand
        );
        element.action = 'buy';
      } else element.action = 'nothing';
    });

    return newActionsArray.reverse();
  };

  const fillDataArrays = () => {
    const pastValues = pastActionValues.reverse();

    const getTodayValues = () => {
      let todayValuesArray = [];

      todayActionValues.forEach((element) => {
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

    const getLastQuarterValues = () => {
      let lastQuarterValuesArray = [];
      pastValues.map((element, index = 0) => {
        if (index < 90) return lastQuarterValuesArray.push(element);
      });

      lastQuarterValuesArray = lastQuarterValuesArray.reverse();
      return lastQuarterValuesArray;
    };
    setTodayValues(getTodayValues);
    setLastWeekValues(
      addForecastTags(getLastWeekValues(), getBollingerBands())
    );
    setLastMonthValues(
      addForecastTags(getLastMonthValues(), getBollingerBands())
    );
    setLastQuarterValues(
      addForecastTags(getLastQuarterValues(), getBollingerBands())
    );
  };

  const xLabel = () => {
    let label;
    if (chartRange === 'today')
      label = todayValues.map((action) => {
        const actionDate = new Date(action.actionDate);
        const actionHour =
          actionDate.getHours() < 10
            ? '0' + actionDate.getHours() + ':00'
            : actionDate.getHours() + ':00';

        const actionDay = actionDate.getDate();
        const actionMonth =
          actionDate.getMonth() < 10
            ? '0' + actionDate.getMonth()
            : actionDate.getMonth;
        const actionYear = actionDate.getFullYear();

        const actionFullDate = `${actionDay}-${actionMonth}-${actionYear}, ${actionHour}`;

        return actionFullDate;
      });
    else if (chartRange === 'week')
      label = lastWeekValues.map((action) => action.closeActionDate);
    else if (chartRange === 'month')
      label = lastMonthValues.map((action) => action.closeActionDate);
    else if (chartRange === 'quarter')
      label = lastQuarterValues.map((action) => action.closeActionDate);
    return label;
  };

  // const chartWithForecastingTags = () => {
  //   for (int i)
  // }

  const chartValues = () => {
    let values = 0;
    if (chartRange === 'today')
      values = todayValues.map((action) => action.value);
    else if (chartRange === 'week')
      values = lastWeekValues.map((action) => action.closeValue);
    else if (chartRange === 'month')
      values = lastMonthValues.map((action) => action.closeValue);
    else if (chartRange === 'quarter')
      values = lastQuarterValues.map((action) => action.closeValue);
    return values;
  };

  const forecastSymbols = () => {
    let values = 0;
    if (chartRange === 'today')
      values = todayValues.map((action) => (action.action = 'nothing'));
    else if (chartRange === 'week')
      values = lastWeekValues.map((action) => action.action);
    else if (chartRange === 'month')
      values = lastMonthValues.map((action) => action.action);
    else if (chartRange === 'quarter')
      values = lastQuarterValues.map((action) => action.action);
    return values;
  };

  const setForecastSymbols = (context, ifBuy, ifSell, ifNothing) => {
    const index = context.dataIndex;
    const action = context.dataset.action[index];

    return action === 'buy' ? ifBuy : action === 'sell' ? ifSell : ifNothing;
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
              action: forecastSymbols(),
              rotation: (context) => setForecastSymbols(context, 0, 180, 0),
              borderWidth: (context) => setForecastSymbols(context, 4, 4, 1),
              borderColor: (context) =>
                setForecastSymbols(context, 'green', 'red', '#999'),

              pointStyle: (context) =>
                setForecastSymbols(context, 'triangle', 'triangle', 'dot'),

              pointBackgroundColor: (context) =>
                setForecastSymbols(context, 'green', 'red', 'blue'),
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
