import React from 'react';
import { Line, defaults } from 'react-chartjs-2';

const ActionChart = ({ actionName, actionValues, chartRange }) => {
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

  const xLabel = () => {
    let label;
    if (chartRange === 'today')
      label = actionValues.today.map((action) =>
        action.hour < 10 ? '0' + action.hour + ':00' : action.hour + ':00'
      );
    else if (chartRange === 'week')
      label = actionValues.week.map((action) => action.day);
    else if (chartRange === 'month')
      label = actionValues.month.map((action) => action.day);
    else if (chartRange === 'quarter')
      label = actionValues.quarter.map((action) => action.day);
    return label;
  };

  const chartValues = () => {
    let values;
    if (chartRange === 'today')
      values = actionValues.today.map((action) => action.value);
    else if (chartRange === 'week')
      values = actionValues.week.map((action) => action.value);
    else if (chartRange === 'month')
      values = actionValues.month.map((action) => action.value);
    else if (chartRange === 'quarter')
      values = actionValues.quarter.map((action) => action.value);
    return values;
  };

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
