import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className='flex justify-between items-center px-4 lg:px-10 py-5 mx-3 rounded-xl bg-blue-950 text-white '>
      <span className='text-xl font-bold'>Bitlink</span>
      <ul className='flex items-center gap-5'>
      <li><Link target='_blank' href="https://www.github.com/baseergroot"><i className="ri-github-fill text-3xl"></i></Link></li>
        <li><Link className='bg-blue-400 px-4 py-2 rounded-2xl' href="/shorten">Get Started</Link></li>
      </ul>
    </nav>
  )
}
