import React, { useState, useEffect } from 'react';
import { Line, defaults } from 'react-chartjs-2';
import SMA from '../../../forecasting_scripts/SMA';
import BB from '../../../forecasting_scripts/BB';

const ActionChart = ({
  actionName,
  chartRange,
  todayActionValues,
  pastActionValues,
  smartAssistant,
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

  const [todayValues, setTodayValues] = useState([]);
  const [lastWeekValues, setLastWeekValues] = useState([]);
  const [lastMonthValues, setLastMonthValues] = useState([]);
  const [lastQuarterValues, setLastQuarterValues] = useState([]);
  const [areBollingerBandsOn, setAreBollingerBandsOn] = useState(true);
  const [bollingerCopy, setBollingerCopy] = useState([]);

  const getBollingerBands = () => {
    const actionCloseValues = pastActionValues.map((action) =>
      parseFloat(action.closeValue)
    );

    const bollinger = BB(
      1.8,
      30,
      actionCloseValues,
      SMA(30, actionCloseValues)
    );

    return bollinger;
  };

  const addForecastTags = (array, bollingerBands) => {
    let newActionsArray = [...array];
    const BBLength = [...bollingerBands].length - 1;

    newActionsArray.reverse().forEach((element, index) => {
      if (
        element.closeValue >=
        bollingerBands[BBLength - index].upperBollingerBand
      )
        element.action = 'sell';
      else if (
        element.closeValue <=
        bollingerBands[BBLength - index].lowerBollingerBand
      )
        element.action = 'buy';
      else element.action = 'nothing';
    });

    return newActionsArray.reverse();
  };

  const fillDataArrays = () => {
    const pastValues = pastActionValues.reverse();
    setBollingerCopy(getBollingerBands());
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
    setTodayValues(getTodayValues());

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
            ? '0' + (actionDate.getMonth() + 1)
            : actionDate.getMonth() + 1;
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

  const drawBBs = (bandPart) => {
    const BBs = bollingerCopy;
    const BBLength = [...BBs].length - 1;
    let newActionsArray = [];
    let values = [];

    if (chartRange === 'week') {
      newActionsArray = [...lastWeekValues];
    } else if (chartRange === 'month') {
      newActionsArray = [...lastMonthValues];
    } else if (chartRange === 'quarter') {
      newActionsArray = [...lastQuarterValues];
    } else if (chartRange === 'today') {
      newActionsArray = [...todayValues];
    }

    newActionsArray.reverse();

    if (bandPart === 'upper')
      newActionsArray.forEach((element, index) =>
        values.push(BBs[BBLength - index].upperBollingerBand)
      );
    else if (bandPart === 'lower')
      newActionsArray.forEach((element, index) =>
        values.push(BBs[BBLength - index].lowerBollingerBand)
      );

    if (areBollingerBandsOn) return values.reverse();
    else return null;
  };

  const forecastSymbols = () => {
    let values = 0;
    if (chartRange === 'today') values = todayValues.map((action) => action);
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

    if (smartAssistant)
      return action === 'buy' ? ifBuy : action === 'sell' ? ifSell : ifNothing;
    else return ifNothing;
  };

  const handleBollingerBandsDisplay = () => {
    const bollingerBandsSwitch = document.querySelector(
      '.bollinger-switch p i.bollinger-toggle-switch'
    );
    setAreBollingerBandsOn(!areBollingerBandsOn);
    bollingerBandsSwitch.classList.toggle('fa-toggle-on');
    bollingerBandsSwitch.classList.toggle('fa-toggle-off');
  };
  useEffect(() => fillDataArrays(), []);

  return (
    <div className='action-chart-wrapper'>
      <div className='bollinger-switch'>
        <p>
          Wstęgi Bollingera
          <i
            className='fa fa-toggle-on bollinger-toggle-switch'
            onClick={handleBollingerBandsDisplay}
          >
            {' '}
          </i>
        </p>
      </div>

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
            {
              label: 'Upper BBs',
              data: drawBBs('upper'),
              pointRadius: 0,
              borderColor: 'orange',
              borderWidth: 1,
              pointHitRadius: 0,
            },
            {
              label: 'Lower BBs',
              data: drawBBs('lower'),
              pointRadius: 0,
              borderWidth: 1,
              borderColor: 'orange',
              pointHitRadius: 0,
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
              color: 'black',
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
