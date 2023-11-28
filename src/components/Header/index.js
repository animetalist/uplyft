'use client'

import React, { useState, useEffect, useCallback } from 'react'
import clsx from 'clsx'
import Logo from '../Logo'
import Menu from '../Menu'
import Button from '../Button'
import Topbar from '../Topbar'
import s from './Header.module.scss'

const BtnCta = ({ handleClose, className }) => (
  <Button
    variant="secondary"
    size="small"
    href="/start"
    onClick={handleClose ? handleClose : null}
    className={clsx(s.header_btn, className)}
  >
    Get Started
  </Button>
)

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleToggle = () => {
    setIsMenuOpen((prevState) => !prevState)
    document.body.style.overflow = isMenuOpen ? '' : 'hidden'
  }

  const handleClose = () => {
    if (window.innerWidth >= 1024) return
    setIsMenuOpen(false)
    document.body.style.overflow = ''
  }

  const handleResize = useCallback(() => {
    if (window.innerWidth >= 1024 && isMenuOpen) {
      setIsMenuOpen(false)
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [isMenuOpen, handleResize])

  return (
    <header className={s.header}>
      <Topbar />
      <div className={clsx('container', s.header_inner)}>
        <Logo className={s.header_logo} />

        <nav className={clsx(s.header_nav, { [s.show]: isMenuOpen })}>
          <Menu variant="header" handleClose={handleClose} />
          <BtnCta className={s.mobile} handleClose={handleClose} />
        </nav>

        <BtnCta className={s.desktop} />

        <button
          tyoe="button"
          aria-label="Menu"
          onClick={handleToggle}
          className={clsx(s.header_hamb, { [s.active]: isMenuOpen })}
        >
          <span className={s.header_hamb_icon} />
        </button>
      </div>
    </header>
  )
}

export default Header
