'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import logo from '@/assets/img/logo.svg?url'
import logoWhite from '@/assets/img/logo-white.svg?url'

const Logo = ({ isWhite, className }) => {
  const pathname = usePathname()
  const isHomepage = pathname === '/'
  const linkProps = !isHomepage && { href: '/', className: className }

  return React.createElement(
    !isHomepage ? Link : React.Fragment,
    {
      ...linkProps,
    },
    <Image
      src={isWhite ? logoWhite : logo}
      width="148"
      height="52"
      alt="UpLyft Financial"
      className={!isHomepage ? null : className}
    />
  )
}

export default Logo
