import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import s from './Button.module.scss'

const Button = ({
  variant = 'primary',
  size = 'big',
  href,
  children,
  className,
  ...rest
}) => {
  return React.createElement(
    href ? Link : 'button',
    {
      className: clsx(s.btn, className, s[variant], s[size]),
      href: href && href,
      ...rest,
    },
    children
  )
}

export default Button
