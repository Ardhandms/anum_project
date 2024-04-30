import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className=" bg-gray-300 flexBetween max-container relative z-30 py-5">
      <Link href={"/"}>
        <Image src="/camp.svg" alt="logo" width={80} height={20} style={{marginLeft: '50px'}}/>
      </Link>

      <ul className="hidden h-full gap-12 lg:flex flex-grow justify-center" style={{marginTop: '20px'}}>
        <Link href={"/"} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
          Button
        </Link>
        <Link href={"/"} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
          Button
        </Link>
      </ul>
        <Link href={"/"} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold" style={{marginRight: '120px', marginTop: '20px'}}>
          Button
        </Link>
    </nav>
  )
}

export default Navbar