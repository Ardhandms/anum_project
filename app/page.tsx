import { Button } from "@/components/ui/button";
import { BsFiletypeCsv } from "react-icons/bs";
import Preview from "./_components/Preview";
import Result from "./_components/Result";

export default function Home() {
  return (
    <>
      <div className="space-y-4">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-center">
          Menghitung angka harapan hidup
        </h1>
        <div className="max-w-xl mx-auto space-y-4">
          <label className="w-full cursor-pointer">
            <div className="w-full flex flex-col justify-center items-center aspect-[16/9] rounded-xl border-2 border-gray-400 border-dashed bg-gray-100">
              <BsFiletypeCsv className="text-4xl" />
              <p className="text-xs mt-2">Upload data csv anda disini!</p>
            </div>
            <input
              accept="text/csv"
              type="file"
              className="hidden"
              name="file"
            />
          </label>
          <Button className="w-full">
            Unggah
          </Button>
        </div>
      </div>
      <Preview />
      <Result />
    </>
  )
}
