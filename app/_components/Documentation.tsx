import Image from 'next/image'
import React from 'react'

function Documentation() {
  return (
    <div className="space-y-2">
      <div>
        <h1 className="text-lg font-semibold tracking-tight">
          Panduan Penggunaan:
        </h1>
        <ul className="list-decimal pl-4">
          <li>Jika data masih berupa excel, sesuaikan tabelnya dengan format yang akan diberikan dibawah.</li>
          <li>Setelah itu, simpan data excel dalam format CSV.</li>
          <li>Pastikan kembali bahwa data sudah benar dan lakukan unggah CSV pada form yang disediakan.</li>
        </ul>
      </div>
      <div>
        <h1 className="text-lg font-semibold tracking-tight">
          Contoh Format Excel:
        </h1>
        <div className="relative w-full aspect-video">
          <Image
            src="/table-format.png"
            alt="table-format"
            fill={true}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Documentation