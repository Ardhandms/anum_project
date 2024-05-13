import { parse } from 'csv-parse';

export async function parseCSV(file: File): Promise<any[]> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const csvData = reader.result as string;
      parse(csvData, {
        delimiter: ',',
        columns: false,
        trim: true,
      }, (err, output) => {
        if (err) {
          reject(err);
        } else {
          resolve(output);
        }
      });
    };

    reader.onerror = reject;

    reader.readAsText(file);
  });
}

export function lagrangeInterpolation(x: number[], y: number[], targetX: number): number {
  let result = 0;
  const n = x.length;

  for (let i = 0; i < n; i++) {
    let term = y[i];
    for (let j = 0; j < n; j++) {
      if (j !== i) {
        term *= (targetX - x[j]) / (x[i] - x[j]);
      }
    }
    result += term;
  }

  return result;
}

