'use client'

import { ApexOptions } from 'apexcharts'
import ReactApexcharts from "@/components/ReactApexChart"

function Result() {
  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
    },
    stroke: {
      curve: 'straight',
      width: 3,
    },
    legend: {
      show: false,
    },
    dataLabels: { enabled: false },
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    xaxis: {
      categories: ['2018', '2019', '2020', '2021', '2022'],
      tickPlacement: 'on',
      labels: {
        show: true,
        style: { colors: '#000000' }
      },
    },
    yaxis: {
      show: true,
      tickAmount: 4,
      labels: {
        offsetX: -17,
        style: { colors: '#000000' },
      },
    },
    tooltip: {
      cssClass: 'text-black'
    },
    responsive: [
      {
        breakpoint: 750,
        options: {
          chart: {
            height: 250
          },
        }
      }
    ]
  }

  return (
    <div className="space-y-3">
      <h3 className="mt-8 scroll-m-20 text-xl font-bold tracking-tight text-center">
        Hasil Perhitungan
      </h3>
      <div className="my-10">
        <div className="mt-4 p-4 md:p-10 border">
          <h1 className="text-2xl font-semibold mb-3">Grafik</h1>
          <ReactApexcharts
            type='line'
            height={400}
            width="100%"
            options={options}
            series={[
              {
                name: 'Series 1',
                data: [1, 4, 3, 7, 5],
                color: '#3b82f6'
              },
              {
                name: 'Series 2',
                data: [3, 2, 5, 8, 6],
                color: '#f43f5e'
              },
              {
                name: 'Series 3',
                data: [2, 5, 6, 3, 9],
                color: '#22c55e'
              },
              {
                name: 'Series 4',
                data: [4, 7, 2, 1, 8],
                color: '#f97316'
              },
              {
                name: 'Series 5',
                data: [5, 1, 4, 6, 2],
                color: '#d946ef'
              }
            ]}
          />
        </div>
      </div>
    </div>
  )
}

export default Result