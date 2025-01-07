import Link from 'next/link'
import React from 'react'

export const Header: React.FC = () => {
  return (
    <div>
 <li>
      <Link href="/home" className="hover:text-gray-300">
        Home
      </Link>
    </li>

      <li>

      <Link href="/about" className="hover:text-gray-300">
        About
      </Link>
    </li>

    </div>
   
  )
}

export default Header;