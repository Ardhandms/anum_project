import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
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

const header = ['Provinsi', '2018', '2019', '2020', '2021', '2022'];

const angkaHarapanHidup = [
  {
    provinsi: 'Aceh',
    data: [
      { year: 2022, value: 70.12 },
      { year: 2021, value: 69.87 },
      { year: 2020, value: 69.54 },
      { year: 2019, value: 69.21 },
      { year: 2018, value: 68.89 }
    ]
  },
  {
    provinsi: 'Sumatera Utara',
    data: [
      { year: 2022, value: 70.45 },
      { year: 2021, value: 70.18 },
      { year: 2020, value: 69.83 },
      { year: 2019, value: 69.49 },
      { year: 2018, value: 69.15 }
    ]
  },
  {
    provinsi: 'Sumatera Barat',
    data: [
      { year: 2022, value: 69.88 },
      { year: 2021, value: 69.62 },
      { year: 2020, value: 69.28 },
      { year: 2019, value: 68.94 },
      { year: 2018, value: 68.60 }
    ]
  },
  {
    provinsi: 'Riau',
    data: [
      { year: 2022, value: 71.02 },
      { year: 2021, value: 70.75 },
      { year: 2020, value: 70.41 },
      { year: 2019, value: 70.07 },
      { year: 2018, value: 69.73 }
    ]
  },
  {
    provinsi: 'Jambi',
    data: [
      { year: 2022, value: 70.35 },
      { year: 2021, value: 70.08 },
      { year: 2020, value: 69.74 },
      { year: 2019, value: 69.40 },
      { year: 2018, value: 69.06 }
    ]
  }
  // dan seterusnya
];

function Preview() {
  return (
    <div className="space-y-3">
      <h3 className="mt-8 scroll-m-20 text-xl font-bold tracking-tight text-center">
        Preview
      </h3>
      <Table className="border">
        <TableHeader>
          <TableRow>
            {header.map((title) => <TableHead className="font-bold bg-gray-200">{title}</TableHead>)}
          </TableRow>
        </TableHeader>
        <TableBody>
          {angkaHarapanHidup.map((data) => (
            <TableRow key={data.provinsi}>
              <TableCell className="font-medium">{data.provinsi}</TableCell>
              {data.data.map((value, index) => (
                <TableCell key={`i-${index + 1}`}>{value.value}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="w-full flex justify-end gap-4 pt-2">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a option" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Options</SelectLabel>
              <SelectItem value="apple">Option 1</SelectItem>
              <SelectItem value="banana">Option 2</SelectItem>
              <SelectItem value="blueberry">Option 3</SelectItem>
              <SelectItem value="grapes">Option 4</SelectItem>
              <SelectItem value="pineapple">Option 5</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button>Hitung</Button>
      </div>
    </div>
  )
}

export default Preview