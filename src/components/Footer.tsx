import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="h-12 md:h-24 px-4 lg:px-10 text-red-500 flex items-center justify-between">
      <Link href="/" className="font-bold text-xl">SMP-RES</Link>
      <p>@ALL RIGHTS RESERVED.</p>
    </div>
  )
}

export default Footer