'use client'

import { Button } from '@/components/ui/button';
import { lagrangeInterpolation, parseCSV } from '@/utils/helper';
import { useState } from 'react';
import { BsFiletypeCsv } from 'react-icons/bs';
import Preview from './_components/Preview';
import Result from './_components/Result';
import { toast } from "sonner";
import Documentation from './_components/Documentation';
import { VscLoading } from 'react-icons/vsc';

type RowsGroupByYLabelsType = {
  label: string;
  data: number[];
  mean?: number;
}

type ResultInterpolation = {
  label: string[];
  series: number[];
}

export default function Home() {
  const [csvData, setCSVData] = useState<any[]>([]);
  const [csvFile, setCSVFile] = useState<FileList[0] | undefined>();
  const [uploadLoading, setUploadLoading] = useState(false);
  const [resultInterpolation, setResultInterpolation] = useState<ResultInterpolation | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setCSVFile(files[0]);
    }
  };

  const handleSubmitData = () => {
    if (csvFile) {
      setUploadLoading(true);
      setTimeout(async () => {
        try {
          const data = await parseCSV(csvFile);
          setCSVData(data);
          toast.success('Berhasil mengubah data CSV!');
        } catch (error) {
          toast.error('Terjadi error ketika mengubah data CSV!');
        } finally {
          setUploadLoading(false);
        }
      }, 3000);
    }
  }

  const handleCalculate = (data: string[][]) => {
    const [yLabels, ...newRows] = data.map((cell) => cell.filter((value) => value !== ''));
    let rowsGroupByYLabels: RowsGroupByYLabelsType[] = [];

    // Buat variabel
    for (let i = 1; i < yLabels.length; i++) {
      rowsGroupByYLabels.push({
        label: yLabels[i],
        data: [],
      });
    }

    // Masukan data
    newRows.forEach((cell, index) => {
      for (let i = 0; i < rowsGroupByYLabels.length; i++) {
        const [label, ...values] = cell;
        rowsGroupByYLabels[i].data.push(+values[i]);
      }
    });

    // Hitung nilai rata rata
    rowsGroupByYLabels = rowsGroupByYLabels.map((row) => ({
      ...row,
      mean: row.data.reduce((acc, cur) => acc + cur, 0) / row.data.length
    }));

    // Hitung interpolasi
    const targetX = rowsGroupByYLabels.length + 1;
    const xData = Array.from({ length: rowsGroupByYLabels.length }).map((_, index) => index + 1);
    const yData = rowsGroupByYLabels.map((row) => row.mean!);
    const result = lagrangeInterpolation(xData, yData, targetX);

    setResultInterpolation({
      label: [...rowsGroupByYLabels.map((row) => row.label), `${targetX}`],
      series: [...rowsGroupByYLabels.map((row) => row.mean!), result].map((value) => +Number(value).toFixed(2))
    });
  }

  return (
    <>
      <div className="w-full grid grid-cols-2 gap-10">
        <div className="space-y-4">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-center">
            Menghitung angka harapan hidup
          </h1>
          <div className="max-w-xl mx-auto space-y-4">
            <label className="w-full cursor-pointer">
              <div className="w-full flex flex-col justify-center items-center aspect-[16/9] rounded-xl border-2 border-gray-400 border-dashed bg-gray-100 p-4">
                <BsFiletypeCsv className="text-4xl" />
                {csvFile ? (
                  <div className="text-center mt-2">
                    <h6 className="font-semibold text-sm">
                      {csvFile.size < 1024 * 1024
                        ? `${(csvFile.size / 1024).toFixed(2)} KB`
                        : `${(csvFile.size / (1024 * 1024)).toFixed(2)} MB`}
                    </h6>
                    <p className="text-xs">{csvFile.name}</p>
                  </div>
                ) : (
                  <p className="text-xs mt-2">Upload data csv anda disini!</p>
                )}
              </div>
              <input
                accept="text/csv"
                type="file"
                className="hidden"
                name="file"
                onChange={handleFileChange}
              />
            </label>
            <Button onClick={handleSubmitData} disabled={!csvFile} className="w-full">
              Unggah
            </Button>
            <div>
              <h1 className="text-lg font-semibold tracking-tight">
                Catatan:
              </h1>
              <ul className="list-decimal pl-4">
                <li>Klik unggah untuk melihat preview data dari CSV.</li>
                <li>Pada preview terdapat tombol hitung untuk melakukan operasi interpolasi data.</li>
                <li>Terakhir, data akan muncul dalam bentuk grafik.</li>
              </ul>
            </div>
          </div>
        </div>
        <Documentation />
      </div>
      {!uploadLoading && !!csvData.length && (
        <Preview
          data={csvData}
          onClickCalculate={handleCalculate}
        />
      )}
      {uploadLoading && (
        <div className="space-y-3">
          <h3 className="mt-8 scroll-m-20 text-xl font-bold tracking-tight text-center">
            Preview
          </h3>
          <div className="h-[400px] w-full flex items-center justify-center">
            <div className="space-y-4">
              <VscLoading className="mx-auto text-4xl animate-spin" />
              <h4 className="animate-pulse">Sedang memuat tampilan preview...</h4>
            </div>
          </div>
        </div>
      )}
      {resultInterpolation && <Result data={resultInterpolation} />}
    </>
  );
}
