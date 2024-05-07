import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"

const Navbar = () => {
  return (
    <header className="w-full flex justify-between gap-10 px-10 py-4">
      <div>
        <h4 className="font-bold">Analisa Numerik</h4>
      </div>
      <div>
        <Button variant="default">Mulai</Button>
      </div>
    </header>
  )
}

export default Navbar