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

type PropTypes = {
  data: string[][];
  onClickCalculate: (data: string[][]) => void;
}

function Preview({ data, onClickCalculate }: PropTypes) {
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
        <Button onClick={() => onClickCalculate(data)}>Hitung</Button>
      </div>
    </div>
  )
}

export default Preview