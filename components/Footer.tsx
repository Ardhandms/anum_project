import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flexCenter mb-24 border-2 border-red-500" style={{ backgroundColor: '#1A202C' }}>
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col item-start justify-center gap-[10%] md:flex:row">
          <Link href={"/"}>
            <Image src="/camp.svg" alt="logo" width={80} height={20} style={{marginLeft: '50px'}}/>
          </Link>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
