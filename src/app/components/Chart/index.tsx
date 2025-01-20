"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Chart() {
        const data = {
      labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      datasets: [
        {
          label: 'Red',
          data: [20, 35, 40, 30, 45, 35, 40],
          borderColor: '#f88',
        },
        {
          label: 'Green',
          data: [20, 15, 30, 25, 30, 40, 35],
          borderColor: '#484',
        },
        {
          label: 'Blue',
          data: [30, 25, 10, 5, 25, 30, -20],
          borderColor: '#48f',
        },
      ],
    };
    return <Doughnut data={data} />;
}

// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend,
//   } from 'chart.js';
//   import { Line } from 'react-chartjs-2';
  
//   // 必要なモジュールを登録
//   ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend
//   );
  
//   export default function Chart() {
//     const data = {
//       labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
//       datasets: [
//         {
//           label: 'Red',
//           data: [20, 35, 40, 30, 45, 35, 40],
//           borderColor: '#f88',
//         },
//         {
//           label: 'Green',
//           data: [20, 15, 30, 25, 30, 40, 35],
//           borderColor: '#484',
//         },
//         {
//           label: 'Blue',
//           data: [30, 25, 10, 5, 25, 30, -20],
//           borderColor: '#48f',
//         },
//       ],
//     };
  
//     const options = {
//       plugins: {
//         title: {
//           display: true,
//           text: 'Sample Chart',
//           color: 'black',
//           padding: { top: 5, bottom: 5 },
//           font: {
//             family: '"Arial", "Times New Roman"',
//             size: 12,
//           },
//         },
//         legend: {
//           position: 'right',
//           align: 'start',
//           labels: {
//             boxWidth: 20,
//             boxHeight: 8,
//           },
//           title: {
//             display: true,
//             text: 'Legend',
//             padding: { top: 20 },
//           },
//         },
//         tooltip: {
//           backgroundColor: '#933',
//         },
//       },
//       scales: {
//         y: {
//           min: 0,
//           max: 60,
//           title: {
//             display: true,
//             text: 'Scale Title',
//             color: 'blue',
//           },
//           ticks: {
//             color: 'blue',
//             stepSize: 20,
//             showLabelBackdrop: true,
//             backdropColor: '#ddf',
//             backdropPadding: { x: 4, y: 2 },
//             major: {
//               enabled: true,
//             },
//             align: 'end',
//             crossAlign: 'center',
//             sampleSize: 4,
//           },
//           grid: {
//             borderColor: 'orange',
//             borderWidth: 2,
//             drawBorder: true,
//             color: '#080',
//             display: true,
//             borderDash: [3, 3],
//             borderDashOffset: 0,
//             drawTicks: true,
//             tickColor: 'blue',
//             tickLength: 10,
//             tickWidth: 2,
//             tickBorderDash: [2, 2],
//             tickBorderDashOffset: 0,
//           },
//         },
//         x: {
//           grid: {
//             borderColor: 'orange',
//             borderWidth: 2,
//           },
//         },
//       },
//     };
  
//     return <Line data={data} options={options} />;
//   }