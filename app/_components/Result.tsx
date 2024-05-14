'use client'

import { ApexOptions } from 'apexcharts'
import ReactApexcharts from "@/components/ReactApexChart"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

type PropTypes = {
  data: {
    label: string[];
    series: number[];
  }
}

function Result({ data }: PropTypes) {
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
      categories: data.label,
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
                name: 'Hasil interpolasi X',
                data: data.series,
                color: '#3b82f6'
              },
            ]}
          />
        </div>
        <div className="mt-4 p-4 md:p-10 border">
          <h1 className="text-2xl font-semibold mb-3">Tabel Hasil</h1>
          <Table className="border">
            <TableHeader>
              <TableRow>
                <TableHead className="font-bold bg-gray-200">
                  Label
                </TableHead>
                {data.label.map((title, index) => (
                  <TableHead key={`title-${index}`} className="font-bold bg-gray-200">
                    {title}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">
                  Hasil
                </TableCell>
                {data.series.map((value, index) => (
                  <TableCell key={`c-r-${index + 1}`} className="font-medium">
                    {value}
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default Result