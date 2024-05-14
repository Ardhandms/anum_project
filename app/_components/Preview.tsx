import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button";
import { VscLoading } from "react-icons/vsc";
import { useState } from "react";

type PropTypes = {
  data: string[][];
  onClickCalculate: (data: string[][], totalInterpolation: number) => void;
  loading: boolean;
}

function Preview({ data, onClickCalculate, loading }: PropTypes) {
  const [totalInterpolationInput, setTotalInterpolationInput] = useState(1);

  const [header, ...rows] = data;
  return (
    <div className="space-y-3">
      <h3 className="mt-8 scroll-m-20 text-xl font-bold tracking-tight text-center">
        Preview
      </h3>
      <div className="max-h-[500px] border overflow-y-auto">
        <Table>
          <TableHeader>
            <TableRow>
              {header.map((title, index) => (
                <TableHead key={`title-${index}`} className="font-bold bg-gray-200">
                  {title}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((cells, index) => (
              <TableRow key={`row-${index + 1}`}>
                {cells.filter((value) => value !== '').map((value, valueIndex) => (
                  <TableCell key={`cell-${index + 1}-${valueIndex + 1}`} className="font-medium">
                    {value}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="w-full flex justify-end gap-4 pt-2">
        <Select value={`${totalInterpolationInput}`} onValueChange={(value) => setTotalInterpolationInput(+value)}>
          <SelectTrigger className="w-full max-w-[200px]">
            <SelectValue placeholder="Pilih jumlah interpolasi" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Jumlah Interpolasi</SelectLabel>
              {Array.from({ length: 10 }).map((_, index) => (
                <SelectItem key={`option-${index + 1}`} value={`${index + 1}`}>
                  {index + 1}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button
          disabled={loading}
          className="gap-2"
          onClick={() => onClickCalculate(data, totalInterpolationInput)}
        >
          {loading ? (
            <>
              <VscLoading className="animate-spin" /> Menghitung...
            </>
          ) : 'Hitung'}
        </Button>
      </div>
    </div>
  )
}

export default Preview