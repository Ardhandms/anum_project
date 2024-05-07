import Link from "next/link";

const Footer = () => {
  return (
    <footer className="rounded-lg shadow m-4">
      <div className="w-full mx-auto px-6 py-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-600 sm:text-center">
          © 2023 <a href="/" className="hover:underline font-semibold">Analisa Numerik</a>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">Home</a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">About</a>
          </li>
        </ul>
      </div>
    </footer>

  )
};

export default Footer;
