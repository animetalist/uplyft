'use client'

import React from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import gsap from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import DATA from './constants'
import s from './Menu.module.scss'

gsap.registerPlugin(ScrollToPlugin)

const Menu = ({ variant, handleClose }) => {
  const pathname = usePathname()
  const isHomepage = pathname === '/'
  return (
    <ul className={clsx(s.menu, { [s[variant]]: variant })}>
      {DATA.map(({ name, link }) => {
        const isAnchor = link.includes('#')
        const handleScroll = (e) => {
          e.preventDefault()
          gsap.to(window, { scrollTo: link, ease: 'power2' })
          handleClose && handleClose()
        }
        const linkProps =
          isAnchor && isHomepage
            ? { onClick: handleScroll }
            : { onClick: handleClose && handleClose }

        return (
          <li key={name}>
            {React.createElement(
              isAnchor && isHomepage ? 'a' : Link,
              {
                href: isAnchor && !isHomepage ? '/' + link : link,
                className: s.menu_link,
                ...linkProps,
              },
              name
            )}
          </li>
        )
      })}
    </ul>
  )
}

export default Menu
