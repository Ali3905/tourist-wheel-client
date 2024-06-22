import { Chart as defaults } from 'chart.js/auto';

defaults.maintainAspectRatio = false;
defaults.responsive = true;

export const commonOptions = {
  plugins: {
    legend: {
      display: false,
    },
  },
};

export const commonAxesOptions = {
  x: {
    ticks: {
      color: '#7e8086',
    },
  },
  y: {
    ticks: {
      color: '#7e8086',
    },
  },
};
